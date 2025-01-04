import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFBEB',
            gap: 3,
          }}
        >
          <div style={{ fontSize: 160 }}>🍝</div>

          <div
            style={{
              fontSize: 30,
              color: '#92400E',
              textAlign: 'center',
              maxWidth: '80%',
            }}
          >
            Never be confused by pasta menus again!
          </div>
        </div>
      ),
      {
        width: 600,
        height: 350,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
