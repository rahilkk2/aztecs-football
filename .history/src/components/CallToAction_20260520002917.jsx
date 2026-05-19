import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      ref={ref}
      id="academy"
      className="relative overflow-hidden flex items-center"
      style={{ minHeight: '600px', paddingBottom: '2rem' }}
    >
      {/* ── Parallax BG ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src="/cta_field.png"
          alt="Football Field at Night"
          className="w-full h-full object-cover"
          style={{ transform: 'scale(1.18)' }}
        />
        {/* Dark overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(5,5,5,0.94) 0%, rgba(5,5,5,0.7) 50%, rgba(5,5,5,0.45) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.5) 0%, transparent 45%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(5,5,5,0.4) 0%, transparent 30%)' }}
        />
      </motion.div>

      {/* ── Gold diagonal streaks ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          style={{
            position: 'absolute', width: '1px', height: '160%', top: '-30%', left: '38%',
            background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.38), transparent)',
            transform: 'rotate(22deg)',
          }}
        />
        <div
          style={{
            position: 'absolute', width: '1px', height: '160%', top: '-30%', left: '52%',
            background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.2), transparent)',
            transform: 'rotate(22deg)',
          }}
        />
        <div
          className="spotlight absolute"
          style={{ width: '700px', height: '700px', top: '50%', right: '0%', transform: 'translateY(-50%)', opacity: 0.14 }}
        />
      </div>

      {/* ── Content ── */}
      <div className="page-container relative z-10 w-full py-16 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-14 md:gap-16">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="section-label mb-5">Join Us</div>
            <h2
              className="leading-none mb-10"
              style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: 'clamp(3rem, 6vw, 5.8rem)',
                lineHeight: 0.98,
                color: '#fff',
              }}
            >
              YOUR JOURNEY
              <br />
              TO GREATNESS
              <span
                className="block mt-2"
                style={{
                  color: '#d4af37',
                  textShadow: '0 0 35px rgba(212,175,55,0.55)',
                }}
              >
                STARTS HERE.
              </span>
            </h2>
            <motion.button
              className="btn-gold inline-flex items-center gap-3 px-11 py-4 text-xs rounded-sm group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              JOIN AZTECS TODAY
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </motion.button>
          </motion.div>

          {/* Right — Floating logo */}
          <motion.div
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.78 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          >
            <div
              className="animate-float rounded-full overflow-hidden border-2 flex items-center justify-center"
              style={{
                width: '280px',
                height: '280px',
                borderColor: 'rgba(212,175,55,0.45)',
                background: 'radial-gradient(circle at 40% 30%, rgba(212,175,55,0.1), rgba(5,5,5,0.75))',
                boxShadow:
                  '0 0 70px rgba(212,175,55,0.28), 0 0 140px rgba(212,175,55,0.1)',
              }}
            >
              <img
                src="/logo.png"
                alt="Aztecs Football Academy Logo"
                className="w-full h-full object-contain p-7"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
