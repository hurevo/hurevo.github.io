import { CheckCircle } from 'lucide-react';
// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';

export function WhoItIsForSection() {
  const items = [
    m.whoItsFor1(),
    m.whoItsFor2(),
    m.whoItsFor3(),
    m.whoItsFor4(),
    m.whoItsFor5(),
  ];

  return (
    <section id="who-its-for-section" className="w-full py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{m.whoItsForHeader()}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{m.whoItsForSubheader()}</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {items.map((item) => (
          <div key={item} className="flex gap-4 p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm items-center">
            <CheckCircle className="w-5 h-5 text-primary shrink-0" />
            <p className="text-base text-foreground leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
