import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';

export function CaseStudySection() {
  return (
    <section id="portfolio-section" className="w-full py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{m.caseStudyHeader()}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{m.caseStudySubheader()}</p>
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl">{m.caseStudyTitle()}</CardTitle>
          <CardDescription className="text-base leading-relaxed mt-2">
            {m.caseStudyDesc()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-t border-border/30 pt-4 mt-2">
            <p className="text-sm text-muted-foreground/60 italic">
              {m.caseStudyFormatHint()}
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
