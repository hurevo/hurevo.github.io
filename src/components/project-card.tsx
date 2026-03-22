import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import projectsData from "@/data/projects.json";
// @ts-expect-error - paraglide messages import
import * as m from "@/paraglide/messages";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
}

function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  category,
  tags,
}: ProjectCardProps) {
  return (
    <Link
      to="/projects/$projectId"
      params={{ projectId: id }}
      className="block"
      onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
    >
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Card className="group relative overflow-hidden border-0 bg-transparent shadow-none cursor-pointer">
          {/* Image Container */}
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

            {/* Category Badge */}
            <div className="absolute left-4 top-4">
              <Badge
                variant="secondary"
                className="bg-background/80 backdrop-blur-sm text-xs font-medium"
              >
                {category}
              </Badge>
            </div>

            {/* View Button - appears on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Button
                size="sm"
                className="bg-background/90 text-foreground backdrop-blur-sm hover:bg-background"
              >
                {m.projectCardViewButton()}
              </Button>
            </div>
          </div>

          {/* Content */}
          <CardHeader className="px-1 pt-5 pb-2 m-4">
            <CardTitle className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
              {title}
            </CardTitle>
            <CardDescription className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
              {description}
            </CardDescription>
          </CardHeader>

          {/* Tags */}
          <CardFooter className="flex flex-wrap gap-2 px-1 pt-0 m-4">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs text-muted-foreground/80">
                #{tag}
              </span>
            ))}
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
}

export function ProjectCardList() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(projectsData.map((p) => p.category));
    return ["All", ...Array.from(cats).sort()];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projectsData;
    return projectsData.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  // Determine grid layout based on project count
  const getGridClasses = () => {
    const count = filteredProjects.length;
    if (count === 1) return "grid-cols-1 max-w-2xl mx-auto";
    if (count === 2) return "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto";
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <div className="mt-20 w-full">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h3 className="text-3xl font-bold tracking-tight mb-3">
          {m.socialProofProjectsHeader?.() || "Featured Work"}
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          {m.socialProofProjectsDesc?.() ||
            "Discover how we help businesses transform their operations with custom enterprise solutions."}
        </p>
      </div>

      {/* Category Filter */}
      {categories.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {category === "All"
                ? m.portfolioFilterAll?.() || "All"
                : category}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <motion.div layout className={`grid gap-8 ${getGridClasses()}`}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              category={project.category}
              tags={project.tags}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
