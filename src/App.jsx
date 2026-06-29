import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Locations from './components/Locations';
import PatientsPortfolio from './components/PatientsPortfolio';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 overflow-x-hidden w-full relative">
      <Navbar />
      
      <main>
        <Hero />
        <TrustIndicators />
        <AboutUs />
        <Services />
        <Testimonials />
        <Gallery />
        <Locations />
        <PatientsPortfolio />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
