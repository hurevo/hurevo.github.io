import { ClipboardList, Cpu, TrendingUp } from 'lucide-react';
// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';

export function WhyHurevoSection() {
  const differentiators = [
    {
      id: 'business-first',
      title: m.whyHurevo1Title(),
      description: m.whyHurevo1Desc(),
      icon: <ClipboardList className="w-5 h-5" />,
    },
    {
      id: 'consulting-execution',
      title: m.whyHurevo2Title(),
      description: m.whyHurevo2Desc(),
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      id: 'practical',
      title: m.whyHurevo3Title(),
      description: m.whyHurevo3Desc(),
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ];

  return (
    <section id="why-hurevo-section" className="w-full py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{m.whyHurevoHeader()}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{m.whyHurevoSubheader()}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentiators.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center p-6 rounded-xl border border-border/50 bg-background/60 backdrop-blur-sm">
              <div className="shrink-0 p-3 rounded-full bg-primary/10 text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
