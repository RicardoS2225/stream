import { NextResponse } from 'next/server';
import { channels } from '@/lib/data';
import type { NextRequest } from 'next/server';

// Mapa de configuración de 'Referer'. Solo los canales que requieren esta cabecera
// para funcionar deben estar aquí. Los demás se manejarán sin ella.
const channelRefererConfig: Record<string, string> = {
  atb: 'https://www.atb.com.bo/',
  'cadena-a': 'https://www.cadenaadigital.com/',
  bolivision: 'https://www.bolivision.com/',
  'red-uno': 'https://www.reduno.com.bo/',
};

export async function GET(
  request: NextRequest,
  { params }: { params: { channelId: string } }
) {
  const { channelId } = params;

  // 1. Encontrar el canal en nuestra lista de datos.
  const channel = channels.find((c) => c.id === channelId);

  // 2. Si el canal no existe, devolver un error 404 claro.
  if (!channel) {
    return new NextResponse(
      JSON.stringify({ error: `Channel with ID "${channelId}" not found.` }),
      { status: 404, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const streamUrl = channel.url;
  
  try {
    const headers = new Headers();
    headers.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    
    // 3. Verificar si el canal necesita una cabecera 'Referer'.
    const referer = channelRefererConfig[channelId];
    if (referer) {
      headers.set('Referer', referer);
    }
    
    console.log(`Fetching stream for ${channel.name} from ${streamUrl} with Referer: ${referer || 'None'}`);

    // 4. Realizar la petición al servidor del stream.
    const response = await fetch(streamUrl, {
      headers: headers,
    });
    
    // 5. Si la respuesta del servidor del stream no es exitosa, devolver un error.
    if (!response.ok) {
      console.error(`Failed to fetch stream for ${channel.name}. Status: ${response.status}`);
      return new NextResponse(
        JSON.stringify({ error: `Failed to fetch stream. Status: ${response.status}` }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 6. Retransmitir el stream de video al cliente.
    // Se clonan las cabeceras de la respuesta original para mantener el `Content-Type`, etc.
    const responseHeaders = new Headers(response.headers);
    responseHeaders.set('Access-Control-Allow-Origin', '*');

    return new Response(response.body, {
        status: 200,
        headers: responseHeaders,
    });

  } catch (error) {
    console.error(`Error proxying channel ${channelId}:`, error);
    return new NextResponse(
      JSON.stringify({ error: 'Internal server error while proxying stream.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
