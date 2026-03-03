import { ProjectCardList } from '../project-card';
// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';

export function SocialProofSection() {
  const metrics = [
    {
      id: 'stockout',
      value: m.metric1Value(),
      label: m.metric1Label(),
    },
    {
      id: 'phone',
      value: m.metric2Value(),
      label: m.metric2Label(),
    },
    {
      id: 'hours',
      value: m.metric3Value(),
      label: m.metric3Label(),
    },
    {
      id: 'inquiries',
      value: m.metric4Value(),
      label: m.metric4Label(),
    },
  ];

  const techLogos = [
    { src: 'react.svg', name: 'React' },
    { src: 'typescript.svg', name: 'TypeScript' },
    { src: 'laravel.svg', name: 'Laravel' },
    { src: 'claude.png', name: 'Claude AI' },
    { src: 'php.png', name: 'PHP' },
    { src: 'n8n.png', name: 'n8n' },
    { src: 'langchain.png', name: 'LangChain' },
  ];

  return (
    <section id="portfolio-section" className="w-full py-20 px-4 border-y border-border/50 bg-background/50">
      <div className="max-w-6xl mx-auto">
        {/* Results metrics */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{m.socialProofHeader()}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{m.socialProofSubheader()}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric) => (
            <div key={metric.id} className="text-center p-6 rounded-xl border border-border/50 bg-card/30">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{metric.value}</div>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wider text-muted-foreground mb-8">
            {m.socialProofTechHeader()}
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {techLogos.map((tech) => (
              <div key={tech.name} className="flex items-center justify-center font-bold text-xl md:text-2xl text-foreground">
                <img src={`/images/brand-logos/${tech.src}`} alt={tech.name} width={75} height={75} />
              </div>
            ))}
          </div>

          {/* Featured work */}
          <ProjectCardList />
        </div>
      </div>
    </section>
  );
}
