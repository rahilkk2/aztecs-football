import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = ['Home', 'About', 'Programs', 'Gallery', 'Contact'];

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.83a8.18 8.18 0 0 0 4.78 1.52V7.91a4.85 4.85 0 0 1-1.01-.22z" />
  </svg>
);

const socialLinks = [
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: YoutubeIcon, label: 'YouTube', href: '#' },
  { icon: TikTokIcon, label: 'TikTok', href: '#' },
];

export default function Footer() {
  const handleNavClick = (link) => {
    const target = document.getElementById(link.toLowerCase());
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      style={{
        background: '#050505',
        marginTop: '8rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Top gold gradient line ── */}
      <div
        style={{
          height: '2px',
          background: 'linear-gradient(to right, transparent, #d4af37, rgba(212,175,55,0.5), #d4af37, transparent)',
        }}
      />

      {/* ── Subtle BG glows ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="spotlight" style={{ width: '500px', height: '500px', top: '-80px', left: '-80px', opacity: 0.05 }} />
        <div className="spotlight" style={{ width: '400px', height: '400px', bottom: '-80px', right: '-40px', opacity: 0.04 }} />
      </div>

      {/* ── Main grid ── */}
      <div className="page-container">
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem', cursor: 'pointer' }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div
                style={{
                  width: '48px', height: '48px',
                  borderRadius: '50%', overflow: 'hidden',
                  border: '2px solid #d4af37',
                  boxShadow: '0 0 18px rgba(212,175,55,0.3)',
                  background: '#0a0a0a',
                  flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <img src="/logo.png" alt="Aztecs Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div>
                <div style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: '2.5px', color: '#fff', fontSize: '1.1rem', lineHeight: 1 }}>
                  AZTECS
                </div>
                <div style={{ color: '#d4af37', fontSize: '8px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>
                  Football Academy
                </div>
              </div>
            </div>

            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', lineHeight: '1.8', maxWidth: '260px' }}>
              Developing future champions through football excellence, discipline and passion. This is Aztecs.
            </p>

            {/* Gold accent bar */}
            <div style={{ width: '50px', height: '3px', background: 'linear-gradient(to right, #d4af37, #f0d060)', borderRadius: '2px', marginTop: '1.5rem' }} />
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#fff', marginBottom: '1.75rem' }}>
              Quick Links
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none' }}>
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNavClick(link)}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.45)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'color 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >
                    <span style={{ width: '12px', height: '1px', background: '#d4af37', display: 'inline-block', flexShrink: 0 }} />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#fff', marginBottom: '1.75rem' }}>
              Contact Us
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <Phone size={15} style={{ color: '#d4af37', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6' }}>+123 456 7890</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <Mail size={15} style={{ color: '#d4af37', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6' }}>info@aztecsacademy.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <MapPin size={15} style={{ color: '#d4af37', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.7' }}>
                  123 Aztecs Way,<br />Champion City, FC 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#fff', marginBottom: '1.75rem' }}>
              Follow Us
            </h4>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: '44px', height: '44px',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.55)',
                    border: '1px solid rgba(212,175,55,0.28)',
                    background: 'rgba(212,175,55,0.05)',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  whileHover={{
                    scale: 1.12,
                    borderColor: '#d4af37',
                    boxShadow: '0 0 18px rgba(212,175,55,0.28)',
                    color: '#d4af37',
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                Stay Updated
              </p>
              <div style={{ display: 'flex', gap: '8px', flexDirection: 'column', minWidth: '0' }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  style={{
                    flex: 1,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(212,175,55,0.2)',
                    borderRadius: '2px',
                    padding: '10px 14px',
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.65)',
                    outline: 'none',
                    minHeight: '44px',
                    width: '100%',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(212,175,55,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(212,175,55,0.2)'}
                />
                <button className="btn-gold" style={{ padding: '10px 16px', fontSize: '13px', borderRadius: '2px', minHeight: '44px' }}>→</button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            borderTop: '1px solid rgba(212,175,55,0.12)',
            paddingTop: '1.75rem',
            paddingBottom: '1.75rem',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <p style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' }}>
            © 2024 Aztecs Football Academy. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '28px' }}>
            {['Privacy Policy', 'Terms of Use'].map((item) => (
              <button
                key={item}
                style={{
                  fontSize: '10px', letterSpacing: '2px',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)',
                  background: 'none', border: 'none', cursor: 'pointer',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.28)'}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
