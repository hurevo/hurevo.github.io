import { ProjectCardList } from "../project-card";

export function SocialProofSection() {
  const techLogos = [
    'react.svg', 'typescript.svg', 'laravel.svg','claude.png', 'php.png', 'n8n.png', 'langchain.png'
  ];

  return (
    <section id="portfolio-section" className="w-full py-16 px-4 border-y border-border/50 bg-background/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-wider text-muted-foreground mb-8">
          Built with Modern Technology Stack
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {techLogos.map((tech, idx) => (
            <div key={idx} className="flex items-center justify-center font-bold text-xl md:text-2xl text-foreground">
              <img src={`/images/brand-logos/${tech}`} alt={tech} width={75} height={75} />
            </div>
          ))}
        </div>

        <ProjectCardList />
      </div>
    </section>
  );
}
