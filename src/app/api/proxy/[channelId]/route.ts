import { NextRequest, NextResponse } from 'next/server';
import { channels } from '@/lib/data';
import type { Channel } from '@/lib/types';

// --- CONFIGURACIÓN ROBUSTA DE CANALES ---
// Mapa de "credenciales" (Referer) para los servidores que lo exigen.
// Esto asegura que solo modificamos las solicitudes para los canales que lo necesitan.
const channelRefererConfig: Record<string, string> = {
  unitel: 'https://unitel.bo/',
  atb: 'https://www.atb.com.bo/',
  'cadena-a': 'https://www.cadenaadigital.com/',
  bolivision: 'https://www.bolivision.com/',
  'red-uno': 'https://www.reduno.com.bo/',
};

export async function GET(
  request: NextRequest,
  { params }: { params: { channelId: string } }
) {
  try {
    const channelId = params.channelId;
    const channel: Channel | undefined = channels.find((c) => c.id === channelId);

    if (!channel || !channel.url || channel.url === 'about:blank') {
      console.error(`[PROXY] Canal no encontrado o URL inválida: ${channelId}`);
      return new NextResponse(
        JSON.stringify({ error: 'Canal no encontrado o con URL inválida' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const streamUrl = channel.url;
    console.log(`[PROXY] Obteniendo stream para ${channel.name} desde ${streamUrl}`);
    
    // Construir cabeceras de la solicitud.
    const requestHeaders: HeadersInit = {
        // Simular un navegador estándar para evitar bloqueos por User-Agent.
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    };
    
    // --- LÓGICA DE REFERER PRECISA ---
    // Añadir el Referer SÓLO si el canal está en nuestro mapa de configuración.
    if (channelRefererConfig[channelId]) {
      requestHeaders['Referer'] = channelRefererConfig[channelId];
      console.log(`[PROXY] Usando Referer específico para ${channel.name}: ${channelRefererConfig[channelId]}`);
    } else {
       console.log(`[PROXY] No se necesita Referer específico para ${channel.name}.`);
    }

    const response = await fetch(streamUrl, { headers: requestHeaders });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `[PROXY] Fallo al obtener el stream para ${channel.name}: ${response.status} ${response.statusText}`,
        { details: errorText }
      );
      return new NextResponse(
        JSON.stringify({
          error: `Fallo al obtener el stream: ${response.statusText}`,
          details: errorText,
        }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[PROXY] Stream obtenido con éxito para ${channel.name}`);
    
    // Crear una nueva respuesta de streaming.
    const responseHeaders = new Headers(response.headers);
    responseHeaders.set('Access-Control-Allow-Origin', '*'); // Permitir CORS

    return new NextResponse(response.body, {
      status: 200,
      headers: responseHeaders,
    });

  } catch (error: any) {
    console.error('[PROXY] Error interno del servidor:', error);
    return new NextResponse(
      JSON.stringify({
        error: 'Error Interno del Servidor',
        details: error.message,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
