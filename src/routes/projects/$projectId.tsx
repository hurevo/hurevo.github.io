import { createFileRoute, Link } from "@tanstack/react-router";
import projectsData from "@/data/projects.json";
import enProjects from "@/data/projects/en.json";
import idProjects from "@/data/projects/id.json";
// @ts-expect-error - paraglide messages import
import * as m from "@/paraglide/messages";
// @ts-expect-error - paraglide runtime import
import { getLocale } from "@/paraglide/runtime";
import { localizeHref } from "@/lib/url";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GlowingBorderButton from "@/components/glowing-border-button";
import { SEOMeta } from "@/components/seo/SEOMeta";
import { motion, type Variants } from "motion/react";
// import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectDetail,
});

interface ProjectContent {
  overview: string;
  coreValue: { title: string; description: string };
  features: { title: string; description: string }[];
  architecture: { title: string; description: string }[];
  deployment: string;
}

interface LocalizedProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
  content: ProjectContent;
}

const localizedProjectsMap: Record<string, LocalizedProject[]> = {
  en: enProjects as LocalizedProject[],
  id: idProjects as LocalizedProject[],
};

function ProjectDetail() {
  const { projectId } = Route.useParams();
  const locale = getLocale() as string;

  // Base metadata (locale-invariant: imageUrl, link)
  const baseMeta = projectsData.find((p) => p.id === projectId);

  // Localized content
  const projects = localizedProjectsMap[locale] ?? localizedProjectsMap["en"];
  const project = projects.find((p) => p.id === projectId);

  if (!baseMeta || !project) {
    return (
      <div className="container mx-auto py-32 px-4 text-center space-y-4">
        <h1 className="text-4xl font-bold">{m.projectNotFoundTitle()}</h1>
        <p className="text-muted-foreground">{m.projectNotFoundDesc()}</p>
        <Link to="/" className="text-primary hover:underline">
          {m.projectNotFoundBack()}
        </Link>
      </div>
    );
  }

  const { content } = project;

  // Check if project has external link
  // const isExternalLink = baseMeta?.link?.startsWith('http');
  // const externalLink = baseMeta?.link;

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto pt-32 pb-24 px-4 md:px-8 space-y-24 max-w-6xl"
    >
      <SEOMeta
        title={`${project.title} - Case Study`}
        description={project.description}
        image={project.imageUrl}
        type="article"
      />

      {/* Hero Section */}
      <motion.section
        variants={itemVariants}
        className="space-y-6 text-center max-w-3xl mx-auto relative mt-8"
      >
        <div className="absolute inset-0 -z-10 translate-y-[-50%] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/15 via-background to-background blur-2xl h-[300px]" />

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-br from-foreground to-foreground/70 pb-2">
          {project.title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* External Link Button */}
        {/*   {isExternalLink && externalLink && (
                    <motion.div
                        variants={itemVariants}
                        className="pt-4"
                    >
                        <a
                            href={externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                className="gap-2"
                            >
                                Visit Live Site
                                <ExternalLink className="h-4 w-4" />
                            </Button>
                        </a>
                    </motion.div>
                )}*/}
      </motion.section>

      {/* Main image */}
      <motion.section
        variants={itemVariants}
        className="relative w-full aspect-video rounded-3xl overflow-hidden border border-border/50 mt-12 bg-black/5 dark:bg-white/5 shadow-2xl ring-1 ring-primary/10"
      >
        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent z-10 pointer-events-none" />
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          fetchPriority="high"
        />
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 border-t border-border/50 pt-16">
        {/* Left Column: Overview & Core Value */}
        <div className="lg:col-span-8 space-y-16">
          {/* Overview */}
          <motion.section variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight">
              {m.projectSectionOverview()}
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80 md:text-xl font-light">
              {content.overview}
            </p>
          </motion.section>

          {/* Core Value */}
          <motion.section
            variants={itemVariants}
            className="relative group rounded-3xl p-8 md:p-12 overflow-hidden bg-background"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-primary/5 z-0" />
            <div className="absolute inset-0 border border-primary/20 rounded-3xl transition-colors duration-500 group-hover:border-primary/50" />

            <div className="relative z-10 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                {content.coreValue.title}
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                {content.coreValue.description}
              </p>
            </div>
          </motion.section>

          {/* Features Grid */}
          <motion.section variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight">
              {m.projectSectionFeatures()}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  custom={idx}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-semibold">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-foreground/70 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Right Column: Technical Architecture & Deployment */}
        <div className="lg:col-span-4 space-y-12">
          {/* Technical Architecture */}
          <motion.section
            variants={itemVariants}
            className="space-y-6 p-8 bg-muted/30 rounded-3xl border border-border/50 backdrop-blur-md"
          >
            <h2 className="text-2xl font-semibold tracking-tight">
              {m.projectSectionTechnical()}
            </h2>
            <Accordion className="w-full">
              {content.architecture.map((tech, idx) => (
                <AccordionItem key={tech.title} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors">
                    {tech.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 text-sm leading-relaxed">
                    {tech.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>

          {/* Deployment */}
          <motion.section
            variants={itemVariants}
            className="space-y-6 p-8 bg-muted/30 rounded-3xl border border-border/50 backdrop-blur-md"
          >
            <h2 className="text-2xl font-semibold tracking-tight">
              {m.projectSectionDeployment()}
            </h2>
            <p className="text-base leading-relaxed text-foreground/70">
              {content.deployment}
            </p>
          </motion.section>
        </div>
      </div>

      {/* Call to Action */}
      <motion.section
        variants={itemVariants}
        className="py-24 border-t border-border mt-24 text-center space-y-8 max-w-2xl mx-auto flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          {m.projectCtaTitle()}
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {m.projectCtaDesc({ projectTitle: project.title })}
        </p>
        <a href={localizeHref("/#contact-section")}>
          <GlowingBorderButton className="mt-8">
            {m.projectCtaButton()}
          </GlowingBorderButton>
        </a>
      </motion.section>
    </motion.div>
  );
}
