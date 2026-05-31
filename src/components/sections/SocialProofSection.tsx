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
        { src: 'claude.webp', name: 'Claude AI' },
        { src: 'php.webp', name: 'PHP' },
        { src: 'n8n.webp', name: 'n8n' },
        { src: 'langchain.webp', name: 'LangChain' },
    ];

    return (
        <section id="portfolio-section" className="w-full py-24 px-4 border-y border-border/30">
            <div className="max-w-6xl mx-auto">
                {/* Results metrics */}
                {/* <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{m.socialProofHeader()}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{m.socialProofSubheader()}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
                    {metrics.map((metric) => (
                        <div
                            key={metric.id}
                            className="text-center p-6 md:p-8 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-card/50"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{metric.value}</div>
                            <p className="text-sm text-muted-foreground leading-snug">{metric.label}</p>
                        </div>
                    ))}
                </div> */}

                {/* Tech stack */}
                {/* <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-wider text-muted-foreground/80 uppercase mb-8">
            {m.socialProofTechHeader()}
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {techLogos.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center justify-center font-bold text-xl md:text-2xl text-foreground transition-transform duration-300 hover:scale-110"
                title={tech.name}
              >
                <img
                  src={`/images/brand-logos/${tech.src}`}
                  alt={tech.name}
                  width={64}
                  height={64}
                  className="h-12 w-12 md:h-16 md:w-16 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div> */}

                {/* Divider */}
                {/* <div className="border-t border-border/30 mb-20" /> */}

                {/* Featured work - Project Cards */}
                <ProjectCardList />
            </div>
        </section>
    );
}
