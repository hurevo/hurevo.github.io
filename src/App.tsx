import { HeroSection } from './components/sections/HeroSection';
import { CredibilityStripSection } from './components/sections/CredibilityStripSection';
import { ProblemStatementSection } from './components/sections/ProblemStatementSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { WhyHurevoSection } from './components/sections/WhyHurevoSection';
import { ExampleOutcomesSection } from './components/sections/ExampleOutcomesSection';
import { HowWeWorkSection } from './components/sections/HowWeWorkSection';
import { WhoItIsForSection } from './components/sections/WhoItIsForSection';
import { CaseStudySection } from './components/sections/CaseStudySection';
import { FAQSection } from './components/sections/FAQSection';
import { SEOMeta } from './components/seo/SEOMeta';

function App() {
    return (
        <div className="flex flex-col items-center w-full">
            <SEOMeta />
            <HeroSection />
            <CredibilityStripSection />
            <ProblemStatementSection />
            <ServicesSection />
            <WhyHurevoSection />
            <ExampleOutcomesSection />
            <HowWeWorkSection />
            <WhoItIsForSection />
            <CaseStudySection />
            <FAQSection />
        </div>
    );
}

export default App;
