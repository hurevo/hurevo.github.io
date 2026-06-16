import { motion } from "motion/react";
// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';

const stepsData = [
  {
    id: 'diagnose',
    num: 1,
    displayNum: '01',
    image: '/images/how-we-work/diagnose.jpg',
    imagePosition: 'left' as const,
  },
  {
    id: 'design',
    num: 2,
    displayNum: '02',
    image: '/images/how-we-work/design.jpg',
    imagePosition: 'right' as const,
  },
  {
    id: 'build',
    num: 3,
    displayNum: '03',
    image: '/images/how-we-work/build.jpg',
    imagePosition: 'left' as const,
  },
  {
    id: 'improve',
    num: 4,
    displayNum: '04',
    image: '/images/how-we-work/improve.jpg',
    imagePosition: 'right' as const,
  },
];

export function HowWeWorkSection() {
  const steps = stepsData.map((s) => ({
    ...s,
    title: (m as Record<string, () => string>)[`processStep${s.num}Title`](),
    desc: (m as Record<string, () => string>)[`processStep${s.num}Desc`](),
  }));

  return (
    <section id="how-we-work-section" className="w-full py-20 md:py-28 bg-muted/30 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{m.processHeader()}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{m.processSubheader()}</p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {steps.map((step) => {
            const isImageLeft = step.imagePosition === 'left';
            const imageOrder = isImageLeft ? 'md:order-1' : 'md:order-2';
            const textOrder = isImageLeft ? 'md:order-2' : 'md:order-1';

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                <div className={`${imageOrder} order-1`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                <div className={`${textOrder} order-2`}>
                  <span className="text-sm font-bold text-primary tracking-widest mb-3 block">
                    {step.displayNum}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
