import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export function ServicesSection() {
  const services = [
    {
      title: 'Business Websites',
      priceParams: '$800-2,500 | 1-2 weeks',
      description: 'Professional websites built with Laravel, delivered fast',
      icon: (
        <svg className="w-10 h-10 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Process Automation',
      priceParams: '$500-2,000 | 3-7 days',
      description: 'Automate repetitive workflows, save 10+ hours/week',
      icon: (
        <svg className="w-10 h-10 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'AI Chatbots',
      priceParams: '$1,000-3,000 | 1-2 weeks',
      description: '24/7 AI assistants that answer customer questions',
      icon: (
        <svg className="w-10 h-10 mb-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
  ];

  return (
    <section id="services-section" className="w-full py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Services</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Focused solutions designed to provide immediate value and rapid ROI for your business.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-md">
            <CardHeader>
              {service.icon}
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <CardDescription className="text-primary font-medium">{service.priceParams}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
