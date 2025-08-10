
import {NextRequest, NextResponse} from 'next/server';

function getBaseUrl(requestUrl: string): string {
    const url = new URL(requestUrl);
    return `${url.protocol}//${url.host}`;
}

export async function GET(req: NextRequest) {
  const {searchParams} = new URL(req.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return new NextResponse('URL parameter is missing', {status: 400});
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Referer': targetUrl,
      },
    });

    if (!response.ok) {
      return new NextResponse(
        `Failed to fetch from upstream: ${response.statusText}`,
        {status: response.status}
      );
    }

    const contentType = response.headers.get('content-type') || 'application/octet-stream';
    const appBaseUrl = getBaseUrl(req.url);

    // If it's an m3u8 playlist, we need to rewrite the segment URLs
    if (contentType.includes('application/vnd.apple.mpegurl') || contentType.includes('application/x-mpegURL') || targetUrl.endsWith('.m3u8')) {
        let playlist = await response.text();
        const targetUri = new URL(targetUrl);
        
        // This regex finds URLs for segments or sub-playlists
        const urlRegex = /^(?!#)(.*)$/gm;

        playlist = playlist.replace(urlRegex, (match) => {
            if (match.trim() === '' || match.startsWith('#')) {
                return match;
            }
            // If the URL is relative, make it absolute
            const absoluteUrl = new URL(match, targetUri.href).href;
            // Rewrite it to point to our proxy
            return `${appBaseUrl}/api/proxy?url=${encodeURIComponent(absoluteUrl)}`;
        });
        
        return new NextResponse(playlist, {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Content-Type': contentType,
            },
        });
    }

    // For other content (like .ts segments), stream it directly
    const body = response.body as ReadableStream<Uint8Array>;
    
    return new NextResponse(body, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': contentType,
      },
    });

  } catch (error) {
    if (error instanceof Error) {
        return new NextResponse(`Proxy error: ${error.message}`, {status: 500});
    }
    return new NextResponse('An unknown proxy error occurred', {status: 500});
  }
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
