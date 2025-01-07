import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: '32px',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
          }}
        >
          🍝
        </div>
      ),
      {
        width: 32,
        height: 32,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate favicon`, {
      status: 500,
    });
  }
}
