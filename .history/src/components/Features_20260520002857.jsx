import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, User, Shield, Star } from 'lucide-react';

const features = [
  {
    icon: Trophy,
    title: 'Elite Training',
    desc: 'World-class training programs designed by professional coaches to elevate your game.',
  },
  {
    icon: User,
    title: 'Player Development',
    desc: 'We focus on technical skills, tactical understanding and personal growth at every level.',
  },
  {
    icon: Shield,
    title: 'Discipline & Values',
    desc: 'Building character, leadership and respect on and off the field for life.',
  },
  {
    icon: Star,
    title: 'Pathway to Success',
    desc: 'Preparing players for scholarships, professional trials and a bright future.',
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      id="features"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #050505, #0c0c0c, #050505)',
        paddingTop: '6rem',
        paddingBottom: '7rem',
      }}
    >
      {/* Gold accent lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.6), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)' }}
      />

      {/* Spotlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="spotlight absolute"
          style={{ width: '600px', height: '600px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.07 }}
        />
      </div>

      <div className="page-container">
        {/* Section header */}
        <motion.div
          className="text-center mb-10 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label mb-3 sm:mb-4">Why Choose Us</div>
          <div className="flex justify-center mb-4 sm:mb-5">
            <div className="gold-divider" />
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
              letterSpacing: '3px',
              color: '#ffffff',
            }}
          >
            WHAT MAKES US DIFFERENT
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-7">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="premium-card glass-card rounded-2xl p-9 text-center flex flex-col items-center gap-5 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: 'easeOut' }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-20 h-20 opacity-10"
                style={{ background: 'linear-gradient(225deg, #d4af37, transparent 60%)' }}
              />

              {/* Icon */}
              <div
                className="w-18 h-18 rounded-full flex items-center justify-center"
                style={{
                  width: '72px',
                  height: '72px',
                  background: 'radial-gradient(circle, rgba(212,175,55,0.16), rgba(212,175,55,0.03))',
                  border: '1.5px solid rgba(212,175,55,0.42)',
                  boxShadow: '0 0 22px rgba(212,175,55,0.14)',
                }}
              >
                <Icon size={30} style={{ color: '#d4af37' }} strokeWidth={1.4} />
              </div>

              <h3
                className="font-bold text-white uppercase"
                style={{ letterSpacing: '2px', fontSize: '0.8rem' }}
              >
                {title}
              </h3>
              <p
                className="text-white/55 leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.78rem', lineHeight: '1.7' }}
              >
                {desc}
              </p>

              {/* Bottom gold accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
