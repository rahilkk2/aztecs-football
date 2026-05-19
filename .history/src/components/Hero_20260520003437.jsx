import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* ── Stadium Background ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_stadium_bg.png"
          alt="Stadium Background"
          className="w-full h-full object-cover opacity-35"
        />
        {/* Gradient overlays - Mobile optimized */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(5,5,5,0.98) 0%, rgba(5,5,5,0.85) 35%, rgba(5,5,5,0.65) 60%, rgba(5,5,5,0.92) 100%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 sm:h-48"
          style={{ background: 'linear-gradient(to top, #050505, transparent)' }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-24 sm:h-32"
          style={{ background: 'linear-gradient(to bottom, rgba(5,5,5,0.7), transparent)' }}
        />
      </div>

      {/* ── Diagonal Gold Accent Lines ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Lines */}
        {[
          { left: '28%', opacity: 0.55 },
          { left: '50%', opacity: 0.25 },
          { right: '22%', left: undefined, opacity: 0.35 },
        ].map((s, i) => (
          <div
            key={i}
            className="hero-diagonal absolute"
            style={{
              width: '1px',
              height: '140%',
              top: '-20%',
              left: s.left,
              right: s.right,
              opacity: s.opacity,
              background: 'linear-gradient(to bottom, transparent, #d4af37, transparent)',
              transform: 'rotate(20deg)',
            }}
          />
        ))}
        {/* Spotlight blobs */}
        <div
          className="spotlight absolute"
          style={{ width: '700px', height: '700px', top: '-150px', left: '-150px', opacity: 0.45 }}
        />
        <div
          className="spotlight absolute"
          style={{ width: '450px', height: '450px', top: '50%', right: '10%', transform: 'translateY(-50%)', opacity: 0.3 }}
        />
      </div>

      {/* ── Floating gold particles ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 3 === 0 ? '2px' : '1px',
              height: i % 3 === 0 ? '2px' : '1px',
              background: 'radial-gradient(circle, #f0d060, #d4af37)',
              left: `${10 + i * 8}%`,
              top: `${15 + (i * 13) % 70}%`,
              animation: `particleFloat ${5 + i * 0.7}s linear infinite`,
              animationDelay: `${i * 0.6}s`,
              opacity: 0.65,
            }}
          />
        ))}
      </div>

      {/* ── Main Content Grid ── */}
      <div className="page-container relative z-10 w-full pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-4 min-h-[calc(100vh-7rem)]">

          {/* LEFT — Text block */}
          <motion.div
            className="lg:col-span-4 flex flex-col justify-center"
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Label */}
            <div className="section-label mb-3 sm:mb-5">Est. 2024</div>

            {/* Heading */}
            <h1
              className="leading-none mb-5 sm:mb-7"
              style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: 'clamp(2rem, 8vw, 5rem)',
                lineHeight: 0.95,
              }}
            >
              BUILDING
              <span
                className="block"
                style={{
                  color: '#d4af37',
                  textShadow: '0 0 35px rgba(212,175,55,0.55)',
                }}
              >
                CHAMPIONS
              </span>
              ON &amp; OFF
              <span className="block">THE PITCH</span>
            </h1>

            {/* Sub-text */}
            <p
              className="text-white/65 leading-relaxed mb-7 sm:mb-10 max-w-sm"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(0.8rem, 2vw, 0.875rem)', lineHeight: '1.75' }}
            >
              Aztecs Football Academy is committed to developing future leaders through football excellence,
              discipline and passion.
            </p>

            {/* CTA */}
            <motion.button
              className="btn-gold inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-9 py-3 sm:py-4 text-xs sm:text-xs rounded-sm group w-fit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              JOIN THE ACADEMY
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </motion.button>
          </motion.div>

          {/* CENTER — Player Image */}
          <motion.div
            className="lg:col-span-4 relative flex justify-center items-end"
            style={{ minHeight: '520px' }}
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.25 }}
          >
            {/* Radial glow floor */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              style={{
                width: '400px',
                height: '300px',
                background: 'radial-gradient(ellipse at center top, rgba(212,175,55,0.22) 0%, transparent 70%)',
                filter: 'blur(24px)',
              }}
            />
            <img
              src="/hero_player.png"
              alt="Aztecs Football Player"
              className="relative z-10 w-full object-contain"
              style={{
                maxWidth: '420px',
                maxHeight: '82vh',
                filter: 'drop-shadow(0 4px 40px rgba(212,175,55,0.28))',
              }}
            />
          </motion.div>

          {/* RIGHT — Shield + Tagline + Mini Stats */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center lg:items-end gap-8 justify-center"
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Floating shield logo */}
            <motion.div
              className="animate-float"
              style={{ filter: 'drop-shadow(0 0 30px rgba(212,175,55,0.5))' }}
            >
              <div
                className="w-52 h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden border-[3px] flex items-center justify-center"
                style={{
                  borderColor: '#d4af37',
                  background: 'radial-gradient(circle at 40% 30%, rgba(212,175,55,0.1), rgba(5,5,5,0.92))',
                  boxShadow: '0 0 50px rgba(212,175,55,0.28), inset 0 0 30px rgba(212,175,55,0.06)',
                }}
              >
                <img
                  src="/logo.png"
                  alt="Aztecs Shield"
                  className="w-full h-full object-contain p-5"
                />
              </div>
            </motion.div>

            {/* Tagline */}
            <div className="text-right">
              <p
                className="text-white/85 font-semibold tracking-[3px] text-sm uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                FOCUS. TRAIN. ACHIEVE.
              </p>
              <p
                style={{
                  fontFamily: "'Bebas Neue', cursive",
                  fontSize: '1.6rem',
                  letterSpacing: '4px',
                  color: '#d4af37',
                  textShadow: '0 0 22px rgba(212,175,55,0.55)',
                  marginTop: '4px',
                }}
              >
                THIS IS AZTECS.
              </p>
            </div>

            {/* Mini stat cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              {[
                { n: '350+', l: 'Players' },
                { n: '20+', l: 'Coaches' },
              ].map(({ n, l }) => (
                <div
                  key={l}
                  className="text-center glass-card rounded-xl px-5 py-4 gold-glow-border"
                >
                  <div
                    style={{
                      fontFamily: "'Bebas Neue', cursive",
                      fontSize: '2rem',
                      color: '#d4af37',
                      lineHeight: 1,
                      textShadow: '0 0 12px rgba(212,175,55,0.4)',
                    }}
                  >
                    {n}
                  </div>
                  <div className="text-white/55 text-[10px] uppercase tracking-[2.5px] mt-1.5">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-55"
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-yellow-500 to-transparent" />
        <span className="text-yellow-500 text-[9px] tracking-[4px] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
