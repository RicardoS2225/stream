import { NextResponse, type NextRequest } from 'next/server';
import { channels } from '@/lib/data';
import type { Channel } from '@/lib/types';

// Mapa de configuración de Referers.
// La clave es el 'id' del canal y el valor es la URL que se usará como Referer.
const channelRefererConfig: Record<string, string> = {
  // --- DailyMotion ---
  'unitel-nacional': 'https://www.dailymotion.com/',
  'red-uno-lpz': 'https://www.dailymotion.com/',
  'red-uno-scz': 'https://www.dailymotion.com/',
  'red-uno-cbba': 'https://www.dailymotion.com/',
  'atb-bolivia': 'https://www.dailymotion.com/',
  'unitel-lpz': 'https://www.dailymotion.com/',
  'unitel-scz': 'https://www.dailymotion.com/',
  'unitel-cbba': 'https://www.dailymotion.com/',
  // --- Bolivision ---
  'bolivision-lpz-hd': 'https://www.bolivision.com/',
  'bolivision-lpz-sd': 'https://www.bolivision.com/',
  'bolivision-scz-hd': 'https://www.bolivision.com/',
  'bolivision-scz-sd': 'https://www.bolivision.com/',
  // --- Otros con Referer ---
  'pat-lpz': 'https://www.redpat.tv/',
  'pat-scz': 'https://www.redpat.tv/',
  'cadena-a': 'https://www.cadenaadigital.com/',
};

export async function GET(
  request: NextRequest,
  { params }: { params: { channelId: string } }
) {
  const channelId = params.channelId;
  const channel = channels.find((c: Channel) => c.id === channelId);

  // 1. Validar que el canal exista.
  if (!channel) {
    return new NextResponse('Channel not found', { status: 404 });
  }

  // 2. Validar que la URL del stream no esté vacía.
  const streamUrl = channel.url;
  if (!streamUrl || streamUrl === 'about:blank') {
    return new NextResponse('Stream URL not available for this channel', { status: 404 });
  }

  // 3. Crear las cabeceras para la solicitud fetch.
  const headers = new Headers();
  headers.append('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
  
  // 4. Añadir el Referer solo si está en el mapa de configuración.
  const referer = channelRefererConfig[channelId];
  if (referer) {
    headers.append('Referer', referer);
  }

  try {
    // 5. Realizar la solicitud al servidor del stream.
    const response = await fetch(streamUrl, {
        method: 'GET',
        headers: headers,
    });

    // 6. Validar la respuesta del servidor del stream.
    if (!response.ok) {
      console.error(`Error fetching stream for ${channelId}: ${response.status} ${response.statusText}`);
      const errorBody = await response.text();
      console.error("Error body:", errorBody);
      return new NextResponse(`Failed to fetch stream: ${response.status} ${response.statusText}`, { status: response.status });
    }

    // 7. Retransmitir la respuesta (el stream de video) al cliente.
    // Se clonan las cabeceras de la respuesta original para asegurar compatibilidad.
    const responseHeaders = new Headers(response.headers);
    
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
    
  } catch (error) {
    console.error(`An exception occurred while fetching stream for ${channelId}:`, error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
