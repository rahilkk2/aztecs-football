import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const stats = [
  { value: 350, suffix: '+', label: 'Players Trained' },
  { value: 20,  suffix: '+', label: 'Expert Coaches'  },
  { value: 15,  suffix: '+', label: 'Partner Clubs'   },
  { value: 100, suffix: '%', label: 'Commitment'      },
];

function CountUp({ target, suffix, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const totalFrames = Math.round(2000 / 16);
    const increment = Math.ceil(target / totalFrames);
    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span>{count}{suffix}</span>;
}

export default function About() {
  const ref    = useRef(null);
  const imgRef = useRef(null);
  const isInView    = useInView(ref,    { once: true, margin: '-100px' });
  const isImgInView = useInView(imgRef, { once: true, margin: '-80px'  });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: '#050505', paddingTop: '7rem', paddingBottom: '7rem' }}
    >
      {/* BG spotlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="spotlight absolute"
          style={{ width: '800px', height: '800px', top: '-100px', right: '-150px', opacity: 0.06 }}
        />
      </div>

      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">

          {/* ── LEFT — Text ── */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -55 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="section-label mb-3">About Us</div>
            <div className="gold-divider mb-7" />

            <h2
              className="leading-tight mb-7"
              style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
                lineHeight: 1.05,
                color: '#fff',
              }}
            >
              MORE THAN ACADEMY,{' '}
              <span
                className="block"
                style={{ color: '#d4af37', textShadow: '0 0 22px rgba(212,175,55,0.4)' }}
              >
                WE ARE A FAMILY.
              </span>
            </h2>

            <p
              className="text-white/60 mb-10 leading-loose"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.875rem',
                lineHeight: '1.85',
                maxWidth: '380px',
              }}
            >
              At Aztecs Football Academy, we don't just teach football — we build champions.
              Our mission is to inspire young athletes to reach their full potential in a positive
              and professional environment. Every session, every drill, every match is a step
              toward greatness — on the pitch and in life.
            </p>

            <motion.button
              className="btn-gold inline-flex items-center gap-3 px-9 py-4 text-xs rounded-sm group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              DISCOVER MORE
              <ChevronRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </motion.button>
          </motion.div>

          {/* ── CENTER — Team Photo ── */}
          <motion.div
            ref={imgRef}
            className="lg:col-span-5 relative img-zoom-wrap rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isImgInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 z-10 rounded-2xl"
              style={{
                background: 'linear-gradient(to top, rgba(5,5,5,0.55), transparent 55%)',
                border: '1px solid rgba(212,175,55,0.18)',
                boxShadow: '0 0 50px rgba(212,175,55,0.07), 0 25px 70px rgba(0,0,0,0.65)',
              }}
            />
            <img
              src="/team_huddle.png"
              alt="Aztecs Football Team"
              className="w-full object-cover"
              style={{
                height: '420px',
                filter: 'contrast(1.08) brightness(0.88) saturate(0.8)',
              }}
            />
            {/* Gold corner brackets */}
            <div className="absolute top-4 left-4 w-9 h-9 border-t-2 border-l-2 z-20" style={{ borderColor: '#d4af37' }} />
            <div className="absolute top-4 right-4 w-9 h-9 border-t-2 border-r-2 z-20" style={{ borderColor: '#d4af37' }} />
            <div className="absolute bottom-4 left-4 w-9 h-9 border-b-2 border-l-2 z-20" style={{ borderColor: '#d4af37' }} />
            <div className="absolute bottom-4 right-4 w-9 h-9 border-b-2 border-r-2 z-20" style={{ borderColor: '#d4af37' }} />
          </motion.div>

          {/* ── RIGHT — Stats ── */}
          <motion.div
            className="lg:col-span-3 flex flex-col gap-5"
            initial={{ opacity: 0, x: 55 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.18 }}
          >
            {stats.map(({ value, suffix, label }, i) => (
              <motion.div
                key={label}
                className="glass-card rounded-xl px-7 py-6 border-l-2 relative overflow-hidden"
                style={{ borderLeftColor: '#d4af37' }}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.28 + i * 0.1 }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', cursive",
                    fontSize: '3.2rem',
                    color: '#d4af37',
                    lineHeight: 1,
                    textShadow: '0 0 18px rgba(212,175,55,0.4)',
                  }}
                >
                  <CountUp target={value} suffix={suffix} started={isInView} />
                </div>
                <div
                  className="text-white/55 uppercase font-semibold mt-2"
                  style={{ fontSize: '0.68rem', letterSpacing: '2.5px' }}
                >
                  {label}
                </div>
                {/* Decorative corner */}
                <div
                  className="absolute top-0 right-0 w-14 h-14 opacity-6"
                  style={{ background: 'linear-gradient(135deg, transparent 50%, #d4af37 50%)', opacity: 0.06 }}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
