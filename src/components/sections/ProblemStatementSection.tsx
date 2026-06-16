// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';

export function ProblemStatementSection() {
  return (
    <section className="w-full py-20 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-center">
        {m.problemTitle()}
      </h2>
      <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
        <p>{m.problemPara1()}</p>
        <p>{m.problemPara2()}</p>
      </div>
    </section>
  );
}
