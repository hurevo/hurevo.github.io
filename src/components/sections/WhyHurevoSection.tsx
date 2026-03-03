import { Target, Monitor, DollarSign, Eye, BadgeCheck, Handshake } from 'lucide-react';
// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';

export function WhyHurevoSection() {
  const differentiators = [
    {
      id: 'outcomes',
      title: m.whyHurevo1Title(),
      description: m.whyHurevo1Desc(),
      icon: <Target className="w-5 h-5" />,
    },
    {
      id: 'working-software',
      title: m.whyHurevo2Title(),
      description: m.whyHurevo2Desc(),
      icon: <Monitor className="w-5 h-5" />,
    },
    {
      id: 'boutique-pricing',
      title: m.whyHurevo3Title(),
      description: m.whyHurevo3Desc(),
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      id: 'transparent',
      title: m.whyHurevo4Title(),
      description: m.whyHurevo4Desc(),
      icon: <Eye className="w-5 h-5" />,
    },
    {
      id: 'warranty',
      title: m.whyHurevo5Title(),
      description: m.whyHurevo5Desc(),
      icon: <BadgeCheck className="w-5 h-5" />,
    },
    {
      id: 'partnership',
      title: m.whyHurevo6Title(),
      description: m.whyHurevo6Desc(),
      icon: <Handshake className="w-5 h-5" />,
    },
  ];

  return (
    <section id="why-hurevo-section" className="w-full py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{m.whyHurevoHeader()}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{m.whyHurevoSubheader()}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item) => (
            <div key={item.id} className="flex gap-4 p-5 rounded-xl border border-border/50 bg-background/60 backdrop-blur-sm">
              <div className="shrink-0 p-2 rounded-lg bg-primary/10 text-primary h-fit">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
