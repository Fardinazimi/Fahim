import Image from 'next/image';

import Link from 'next/link';

export default function HeroSection() {
  const sectionStyle = {
    position: 'relative',
    minHeight: '72vh',
    display: 'grid',
    placeItems: 'center',
    padding: '4rem 1.5rem',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, #0b132b 0%, #1c2541 60%, #3a506b 100%)',
    color: '#fff',
  };

  const containerStyle = {
    width: '100%',
    maxWidth: 1100,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '2rem',
    alignItems: 'center',
  };

  const leftStyle = { zIndex: 2 };
  const titleStyle = { fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1, margin: 0 };
  const subtitleStyle = { opacity: 0.9, marginTop: 12, maxWidth: 640 };

  const ctaWrapStyle = { display: 'flex', gap: '1rem', marginTop: 24, flexWrap: 'wrap' };
  const primaryBtn = {
    background: '#ffcb77',
    color: '#0b132b',
    padding: '0.8rem 1.2rem',
    borderRadius: 10,
    fontWeight: 700,
    border: 'none',
  };
  const ghostBtn = {
    background: 'transparent',
    color: '#fff',
    padding: '0.8rem 1.2rem',
    borderRadius: 10,
    border: '1px solid rgba(255,255,255,0.35)',
    fontWeight: 600,
  };

  const statsWrap = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(90px, 1fr))',
    gap: '1rem',
    marginTop: 28,
    maxWidth: 520,
  };

  const statBox = {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: '0.9rem',
    textAlign: 'center',
  };

  const rightStyle = { position: 'relative', height: 420, zIndex: 1 };

  const bgImageWrap = {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    pointerEvents: 'none',
    opacity: 0.18,
  };

  const overlayGradient = {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(1200px 600px at 10% 10%, rgba(255,203,119,0.22), transparent 55%), radial-gradient(1200px 600px at 95% 90%, rgba(61,180,255,0.18), transparent 50%)',
    zIndex: 0,
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '6px 10px',
    borderRadius: 999,
    border: '1px solid rgba(255,255,255,0.25)',
    background: 'rgba(0,0,0,0.15)',
    fontSize: 12,
    marginBottom: 14,
  };

  const profileWrap = {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    margin: '10px 0 14px',
  };

  return (
    <section style={sectionStyle}>
      {/* Background construction site image & overlays */}
      <div style={bgImageWrap} aria-hidden>
        <Image src="/images/site-hero.jpg" alt="Construction site background" fill priority style={{ objectFit: 'cover' }} />
      </div>
      <div style={overlayGradient} aria-hidden />

      <div style={{ ...containerStyle, gridTemplateColumns: '1.2fr 1fr' }}>
        {/* Left column: text */}
        <div style={leftStyle}>
          <div style={badgeStyle}>
            <Image src="/images/helmet.png" alt="Helmet" width={18} height={18} />
            <span>Civil Engineer • Structural & Infrastructure</span>
          </div>
          {/* Owner identity */}
          <div style={profileWrap}>
            <div style={{ position: 'relative', width: 110, height: 110, borderRadius: '50%', overflow: 'hidden', border: '3px solid rgba(255,255,255,0.6)', boxShadow: '0 10px 30px rgba(0,0,0,0.35)' }}>
              <Image src="/images/profile.jpg" alt="Fahim Azimi" fill sizes="(max-width: 640px) 90px, 110px" style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 18 }}>Fahim Azimi</div>
              <div style={{ opacity: 0.9 }}>Owner of this Portfolio • Professional Civil Engineer</div>
            </div>
          </div>
          <h1 style={titleStyle}>I’m Fahim Azimi — building resilient bridges, roads, and skylines.</h1>
          <p style={subtitleStyle}>
            I’m a civil engineer specializing in structural design and project delivery. I turn complex requirements
            into safe, efficient, and sustainable infrastructure—on time and on budget.
          </p>

          <div style={ctaWrapStyle}>
            <Link href="/projects" style={primaryBtn}>View Projects</Link>
            <Link href="/contact" style={ghostBtn}>Request a Quote</Link>
          </div>

          <div style={statsWrap}>
            <div style={statBox}>
              <div style={{ fontSize: 24, fontWeight: 800 }}>50+</div>
              <div style={{ opacity: 0.8, fontSize: 12 }}>Completed Projects</div>
            </div>
            <div style={statBox}>
              <div style={{ fontSize: 24, fontWeight: 800 }}>10 yrs</div>
              <div style={{ opacity: 0.8, fontSize: 12 }}>Experience</div>
            </div>
            <div style={statBox}>
              <div style={{ fontSize: 24, fontWeight: 800 }}>ISO</div>
              <div style={{ opacity: 0.8, fontSize: 12 }}>Quality Focus</div>
            </div>
          </div>
        </div>

        {/* Right column: collage */}
        <div style={{ ...rightStyle, height: 480 }}>
          {/* Blueprint card */}
          <div style={{ position: 'absolute', right: 0, top: 0, width: 300, height: 210, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(4px)' }}>
            <Image src="/images/blueprint.png" alt="Blueprint" fill style={{ objectFit: 'cover' }} />
          </div>
          {/* Bridge photo */}
          <div style={{ position: 'absolute', left: 0, top: 90, width: 400, height: 260, borderRadius: 16, overflow: 'hidden', transform: 'rotate(-2deg)', boxShadow: '0 12px 48px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <Image src="/images/bridge.jpg" alt="Bridge" fill style={{ objectFit: 'cover' }} />
          </div>
          {/* Crane badge */}
          <div style={{ position: 'absolute', right: 24, bottom: 18, display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderRadius: 12, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)' }}>
            <Image src="/images/crane.png" alt="Crane" width={34} height={34} />
            <div>
              <div style={{ fontWeight: 700, lineHeight: 1 }}>Site Supervision</div>
              <div style={{ fontSize: 12, opacity: 0.85 }}>Safety-first execution</div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style jsx>{`
        @media (max-width: 920px) {
          section > div[style] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
