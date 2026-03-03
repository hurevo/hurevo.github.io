import { Zap, Shield, ShieldCheck } from 'lucide-react';
// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';

export function BrandPromiseSection() {
  const promises = [
    {
      id: 'fast',
      title: m.brandPromiseFastTitle(),
      description: m.brandPromiseFastDesc(),
      icon: <Zap className="w-6 h-6" />,
    },
    {
      id: 'stable',
      title: m.brandPromiseStableTitle(),
      description: m.brandPromiseStableDesc(),
      icon: <Shield className="w-6 h-6" />,
    },
    {
      id: 'secure',
      title: m.brandPromiseSecureTitle(),
      description: m.brandPromiseSecureDesc(),
      icon: <ShieldCheck className="w-6 h-6" />,
    },
  ];

  return (
    <section className="w-full py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{m.brandPromiseHeader()}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{m.brandPromiseSubheader()}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {promises.map((promise) => (
          <div key={promise.id} className="flex flex-col items-center text-center p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
            <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
              {promise.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{promise.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{promise.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
