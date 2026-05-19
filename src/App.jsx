import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Programs from './components/Programs';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

// Reusable gold gradient divider between sections
const GoldDivider = () => (
  <div className="section-gold-divider" />
);

function App() {
  return (
    <div style={{ background: '#050505', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <GoldDivider />
      <Features />
      <GoldDivider />
      <About />
      <GoldDivider />
      <Programs />
      <GoldDivider />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
