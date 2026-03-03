// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';

export function ProcessSection() {
  const steps = [
    { id: 'discovery', num: '1', title: m.processStep1Title(), desc: m.processStep1Desc() },
    { id: 'proposal', num: '2', title: m.processStep2Title(), desc: m.processStep2Desc() },
    { id: 'sprint', num: '3', title: m.processStep3Title(), desc: m.processStep3Desc() },
    { id: 'launch', num: '4', title: m.processStep4Title(), desc: m.processStep4Desc() },
  ];

  return (
    <section id="process-section" className="w-full py-20 bg-muted/30 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{m.processHeader()}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{m.processSubheader()}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-border -z-10" />

          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center text-xl font-bold text-primary mb-6 shadow-sm">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
