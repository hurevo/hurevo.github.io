import { Briefcase, HeartPulse, ShoppingCart, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';

export function IndustrySection() {
  const industries = [
    {
      id: 'professional-services',
      title: m.industryProfServicesTitle(),
      description: m.industryProfServicesDesc(),
      points: [
        m.industryProfServicesPoint1(),
        m.industryProfServicesPoint2(),
        m.industryProfServicesPoint3(),
      ],
      icon: <Briefcase className="w-7 h-7" />,
    },
    {
      id: 'healthcare',
      title: m.industryHealthcareTitle(),
      description: m.industryHealthcareDesc(),
      points: [
        m.industryHealthcarePoint1(),
        m.industryHealthcarePoint2(),
        m.industryHealthcarePoint3(),
      ],
      icon: <HeartPulse className="w-7 h-7" />,
    },
    {
      id: 'retail',
      title: m.industryRetailTitle(),
      description: m.industryRetailDesc(),
      points: [
        m.industryRetailPoint1(),
        m.industryRetailPoint2(),
        m.industryRetailPoint3(),
      ],
      icon: <ShoppingCart className="w-7 h-7" />,
    },
  ];

  return (
    <section id="industry-section" className="w-full py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{m.industryHeader()}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{m.industrySubheader()}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {industries.map((industry) => (
          <Card key={industry.id} className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all">
            <CardHeader>
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary w-fit mb-3">
                {industry.icon}
              </div>
              <CardTitle className="text-xl">{industry.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {industry.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {industry.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
