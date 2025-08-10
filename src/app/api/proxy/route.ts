
import {NextRequest, NextResponse} from 'next/server';

export async function GET(req: NextRequest) {
  const {searchParams} = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return new NextResponse('URL parameter is missing', {status: 400});
  }

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    if (!response.ok) {
      return new NextResponse(
        `Failed to fetch from upstream: ${response.statusText}`,
        {status: response.status}
      );
    }
    
    // Get the response body as a ReadableStream
    const body = response.body as ReadableStream<Uint8Array>;

    // Get content type from the original response
    const contentType = response.headers.get('content-type') || 'application/octet-stream';
    
    // Return a new response with the fetched stream and proper CORS headers
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
