// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';

export function CredibilityStripSection() {
  return (
    <section className="w-full py-16 px-4 bg-muted/30 border-y border-border/30">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3">
          {m.credibilityLine1()}
        </p>
        <p className="text-base md:text-lg text-muted-foreground/70 leading-relaxed">
          {m.credibilityLine2()}
        </p>
      </div>
    </section>
  );
}
