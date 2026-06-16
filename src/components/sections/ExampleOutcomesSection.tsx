import { CheckCircle } from 'lucide-react';
// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';

export function ExampleOutcomesSection() {
  const outcomes = [
    { id: 'outcome1', text: m.outcome1() },
    { id: 'outcome2', text: m.outcome2() },
    { id: 'outcome3', text: m.outcome3() },
    { id: 'outcome4', text: m.outcome4() },
  ];

  return (
    <section className="w-full py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{m.exampleOutcomesHeader()}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{m.exampleOutcomesSubheader()}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {outcomes.map((outcome) => (
          <div
            key={outcome.id}
            className="flex gap-4 p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm items-start"
          >
            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-base text-foreground leading-relaxed">{outcome.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
