import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Sunil Tiwari — AI Thought Leader, Engineer, Computer Scientist'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background:
            'linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #312e81 100%)',
          color: '#f8fafc',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #60a5fa, #c084fc)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 700,
              color: '#0f172a',
            }}
          >
            ST
          </div>
          <div style={{ fontSize: '24px', opacity: 0.8 }}>suniltiwari.io</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: '76px',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
            }}
          >
            Sunil Tiwari
          </div>
          <div
            style={{
              fontSize: '36px',
              lineHeight: 1.2,
              color: '#cbd5e1',
              maxWidth: '900px',
            }}
          >
            AI Thought Leader · Engineer · Computer Scientist
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '20px',
            fontSize: '22px',
            color: '#94a3b8',
          }}
        >
          <span>CEO @ Octopod AI</span>
          <span>·</span>
          <span>Ex-CTO @ Fulloop AI</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
