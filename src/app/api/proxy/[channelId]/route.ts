import { NextRequest, NextResponse } from 'next/server';
import { channels } from '@/lib/data';
import type { Channel } from '@/lib/types';

export async function GET(
  request: NextRequest,
  { params }: { params: { channelId: string } }
) {
  try {
    const channelId = params.channelId;
    const channel: Channel | undefined = channels.find((c) => c.id === channelId);

    if (!channel || !channel.url || channel.url === 'about:blank') {
      console.error(`Channel not found or has an invalid URL: ${channelId}`);
      return new NextResponse(
        JSON.stringify({ error: 'Channel not found or has an invalid URL' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const streamUrl = channel.url;
    console.log(`[PROXY] Fetching stream for ${channel.name} from ${streamUrl}`);

    let referer = new URL(streamUrl).origin + '/';
    if (channelId === 'atb') {
      referer = 'https://www.atb.com.bo/';
    } else if (channelId === 'cadena-a') {
      referer = 'https://www.cadenaadigital.com/';
    }

    const response = await fetch(streamUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        Referer: referer,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `[PROXY] Failed to fetch stream for ${channel.name}: ${response.status} ${response.statusText}`,
        errorText
      );
      return new NextResponse(
        JSON.stringify({
          error: `Failed to fetch stream: ${response.statusText}`,
          details: errorText,
        }),
        {
          status: response.status,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    console.log(`[PROXY] Successfully fetched stream for ${channel.name}`);
    const body = response.body;

    return new NextResponse(body, {
      status: 200,
      headers: {
        'Content-Type':
          response.headers.get('Content-Type') ||
          'application/vnd.apple.mpegurl',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error: any) {
    console.error('[PROXY] Internal Server Error:', error);
    return new NextResponse(
      JSON.stringify({
        error: 'Internal Server Error',
        details: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
