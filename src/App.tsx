import { useEffect } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { SocialProofSection } from './components/sections/SocialProofSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import NavbarSection from './components/sections/navbar';

function App() {
  // Load Calendly script once the component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30">
      <main className="flex flex-col items-center w-full">
        <NavbarSection />
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <SocialProofSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
