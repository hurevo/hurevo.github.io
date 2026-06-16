import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Search, Database, Workflow, Compass } from 'lucide-react';
// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';

export function ServicesSection() {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      id: 'process-audit',
      title: m.service1Title(),
      description: m.service1Desc(),
      icon: <Search className="w-8 h-8" />,
    },
    {
      id: 'erp-implementation',
      title: m.service2Title(),
      description: m.service2Desc(),
      icon: <Database className="w-8 h-8" />,
    },
    {
      id: 'integration-automation',
      title: m.service3Title(),
      description: m.service3Desc(),
      icon: <Workflow className="w-8 h-8" />,
    },
    {
      id: 'tech-advisory',
      title: m.service4Title(),
      description: m.service4Desc(),
      icon: <Compass className="w-8 h-8" />,
    },
  ];

  return (
    <section id="services-section" className="w-full py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{m.servicesHeader()}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{m.servicesSubheader()}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card
            key={service.id}
            className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-lg group cursor-pointer"
            onClick={scrollToContact}
          >
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </div>
              <CardDescription className="text-base leading-relaxed">
                {service.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
