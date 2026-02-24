export function ProcessSection() {
  const steps = [
    { num: '1', title: 'Book 30-min call', desc: 'Discuss your goals and identify immediate opportunities.' },
    { num: '2', title: 'Get proposal in 48h', desc: 'Receive a clear scope, timeline, and fixed pricing.' },
    { num: '3', title: 'We build & iterate', desc: 'Fast execution with regular updates and your feedback.' },
    { num: '4', title: 'Launch & support', desc: 'Deploy your solution and provide ongoing adjustments.' },
  ];

  return (
    <section id="process-section" className="w-full py-16 bg-muted/30 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple, Transparent Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-border -z-10" />

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative">
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
