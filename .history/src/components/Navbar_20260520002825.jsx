import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = ['Home', 'About', 'Programs', 'Academy', 'Gallery', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (link) => {
    setMenuOpen(false);
    const target = document.getElementById(link.toLowerCase());
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/96 backdrop-blur-lg border-b border-yellow-600/20 py-3 shadow-2xl'
          : 'bg-transparent backdrop-blur-sm py-5'
      }`}
    >
      <div className="page-container flex items-center justify-between">

        {/* ── Logo ── */}
        <div
          className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Logo image – object-contain so the full shield shows */}
          <div
            className="w-9 sm:w-11 h-9 sm:h-11 rounded-full overflow-hidden border-2 border-yellow-500/60 flex items-center justify-center shrink-0"
            style={{ boxShadow: '0 0 14px rgba(212,175,55,0.3)', background: '#0a0a0a' }}
          >
            <img
              src="/logo.png"
              alt="Aztecs Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="leading-none hidden sm:block">
            <div
              className="text-white text-lg sm:text-xl tracking-[2px] sm:tracking-[3px] font-black"
              style={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              AZTECS
            </div>
            <div className="text-yellow-500 text-[8px] sm:text-[9px] font-bold tracking-[2px] sm:tracking-[3px] uppercase mt-0.5">
              Football Academy
            </div>
          </div>
        </div>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleNavClick(link)}
                className="text-white/75 hover:text-yellow-400 text-[11px] font-semibold tracking-[2.5px] uppercase transition-all duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-yellow-500 transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* ── CTA + Hamburger ── */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => handleNavClick('Contact')}
            className="btn-gold hidden sm:block px-6 py-2.5 text-[11px] rounded-sm tracking-widest"
          >
            JOIN NOW
          </button>
          <button
            className="lg:hidden text-white hover:text-yellow-400 transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black/98 border-t border-yellow-600/20 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-white/70 hover:text-yellow-400 text-sm font-semibold tracking-[2px] uppercase text-left transition-colors py-1 border-b border-white/5 pb-3"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('Contact')}
            className="btn-gold px-6 py-3 text-xs rounded-sm mt-1 w-fit tracking-widest"
          >
            JOIN NOW
          </button>
        </div>
      </div>
    </nav>
  );
}
