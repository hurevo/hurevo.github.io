import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Workflow, Bot, RefreshCw, ArrowRight } from 'lucide-react';
// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';

export function ServicesSection() {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      id: 'custom-software',
      title: m.service1Title(),
      description: m.service1Desc(),
      highlight: m.service1Highlight(),
      icon: <Code className="w-8 h-8" />,
    },
    {
      id: 'automation',
      title: m.service2Title(),
      description: m.service2Desc(),
      highlight: m.service2Highlight(),
      icon: <Workflow className="w-8 h-8" />,
    },
    {
      id: 'ai-solutions',
      title: m.service3Title(),
      description: m.service3Desc(),
      highlight: m.service3Highlight(),
      icon: <Bot className="w-8 h-8" />,
    },
    {
      id: 'legacy-modernization',
      title: m.service4Title(),
      description: m.service4Desc(),
      highlight: m.service4Highlight(),
      icon: <RefreshCw className="w-8 h-8" />,
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
            <CardContent>
              <Badge variant="secondary" className="text-sm font-medium">
                {service.highlight}
              </Badge>
            </CardContent>
            <CardFooter>
              <span className="text-sm font-medium text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                {m.servicesCTA()} <ArrowRight className="w-4 h-4" />
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
