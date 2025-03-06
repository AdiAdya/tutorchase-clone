import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
