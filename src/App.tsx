import { HeroSection } from './components/sections/HeroSection';
import { BrandPromiseSection } from './components/sections/BrandPromiseSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { WhyHurevoSection } from './components/sections/WhyHurevoSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { IndustrySection } from './components/sections/IndustrySection';
import { SocialProofSection } from './components/sections/SocialProofSection';
import { SEOMeta } from './components/seo/SEOMeta';

function App() {
    return (
        <div className="flex flex-col items-center w-full">
            <SEOMeta />
            <HeroSection />
            <BrandPromiseSection />
            <ServicesSection />
            <WhyHurevoSection />
            <ProcessSection />
            <IndustrySection />
            <SocialProofSection />
        </div>
    );
}

export default App;
