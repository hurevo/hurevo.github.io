import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { SocialProofSection } from './components/sections/SocialProofSection';
import { SEOMeta } from './components/seo/SEOMeta';

function App() {
    return (
        <div className="flex flex-col items-center w-full">
            <SEOMeta />
            <HeroSection />
            <ServicesSection />
            <ProcessSection />
            <SocialProofSection />
        </div>
    );
}

export default App;
