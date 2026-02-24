import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full py-20 md:py-32 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
      <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        Software Development + AI Specialists | Serving Startups & Enterprise Globally
      </div>

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
        AI-Powered Development & Automation for Growing Businesses
      </h1>

      <p className="text-xl text-muted-foreground mb-10 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
        Software Development and workflow automation delivered 50-70% faster, at Southeast Asian rates
      </p>

      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
        <Button size="lg" className="h-14 px-8 text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/25 transition-all" onClick={scrollToContact}>
          Book Free Consultation
        </Button>
      </div>
    </section>
  );
}
