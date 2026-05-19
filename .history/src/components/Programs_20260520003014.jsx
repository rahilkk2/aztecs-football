import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Dumbbell, Users, Zap, GraduationCap } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const programs = [
  {
    icon: Dumbbell,
    title: 'Youth Development',
    age: 'Ages 6–12',
    desc: 'Foundation program for young players to learn, grow and enjoy the beautiful game.',
  },
  {
    icon: Users,
    title: 'Academy Program',
    age: 'Ages 13–18',
    desc: 'Advanced training for serious players who want to compete at higher levels.',
  },
  {
    icon: Zap,
    title: 'Elite Performance',
    age: 'Ages 15+',
    desc: 'High-performance training for players aiming for professional careers.',
  },
  {
    icon: GraduationCap,
    title: 'Scholarship Pathway',
    age: 'Ages 15+',
    desc: 'Guiding players towards scholarships and international opportunities.',
  },
];

function ProgramCard({ icon: Icon, title, age, desc, delay }) {
  return (
    <motion.div
      className="premium-card glass-card rounded-2xl p-6 sm:p-7 md:p-10 text-center flex flex-col items-center gap-4 sm:gap-5 md:gap-6 h-full relative overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      {/* Top diagonal gold corner */}
      <div
        className="absolute -top-1 -right-1 w-16 h-16 opacity-15"
        style={{ background: 'linear-gradient(225deg, #d4af37 0%, transparent 60%)' }}
      />

      {/* Icon ring */}
      <div
        className="flex items-center justify-center rounded-full"
        style={{
          width: '84px',
          height: '84px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.18), rgba(5,5,5,0.5))',
          border: '2px solid rgba(212,175,55,0.45)',
          boxShadow: '0 0 28px rgba(212,175,55,0.18)',
          flexShrink: 0,
        }}
      >
        <Icon size={34} style={{ color: '#d4af37' }} strokeWidth={1.4} />
      </div>

      {/* Age badge */}
      <span
        className="font-bold uppercase px-4 py-1.5 rounded-full"
        style={{
          fontSize: '10px',
          letterSpacing: '2.5px',
          color: '#d4af37',
          border: '1px solid rgba(212,175,55,0.4)',
          background: 'rgba(212,175,55,0.07)',
        }}
      >
        {age}
      </span>

      <h3
        className="font-bold text-white uppercase"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: '2px',
          fontSize: '0.82rem',
        }}
      >
        {title}
      </h3>

      <p
        className="text-white/55 leading-relaxed"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '0.8rem',
          lineHeight: '1.75',
        }}
      >
        {desc}
      </p>

      {/* Bottom gold line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)' }}
      />
    </motion.div>
  );
}

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="programs"
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #060606, #0a0a0a, #060606)',
        paddingTop: 'clamp(3rem, 8vw, 7rem)',
        paddingBottom: 'clamp(3rem, 8vw, 7rem)',
      }}
    >
      {/* Background spotlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="spotlight absolute"
          style={{ width: '700px', height: '700px', bottom: '-250px', left: '-120px', opacity: 0.07 }}
        />
      </div>

      <div className="page-container">
        {/* Section header */}
        <motion.div
          className="text-center mb-10 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label mb-3 sm:mb-4">Our Programs</div>
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="gold-divider" />
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 'clamp(1.8rem, 6vw, 4.2rem)',
              letterSpacing: '3px',
              color: '#ffffff',
            }}
          >
            PROGRAMS FOR EVERY PLAYER
          </h2>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
              maxWidth: '520px',
              lineHeight: '1.75',
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '1rem',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            From grassroots foundations to elite performance — we have a pathway tailored for every aspiring footballer.
          </p>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-7">
          {programs.map(({ icon, title, age, desc }, i) => (
            <ProgramCard
              key={title}
              icon={icon}
              title={title}
              age={age}
              desc={desc}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.08}
            centeredSlides
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className="pb-14"
          >
            {programs.map(({ icon, title, age, desc }) => (
              <SwiperSlide key={title}>
                <ProgramCard icon={icon} title={title} age={age} desc={desc} delay={0} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Bottom gold rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)' }}
      />
    </section>
  );
}
