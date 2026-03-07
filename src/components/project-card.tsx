import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Link } from '@tanstack/react-router';
import projectsData from "@/data/projects.json";
// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
}

function ProjectCard({ id, title, description, imageUrl, tags }: ProjectCardProps) {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src={imageUrl}
                alt={title}
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
                <CardAction>
                    <Badge variant="secondary">{m.projectCardFeaturedBadge()}</Badge>
                </CardAction>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardHeader>
            <CardFooter>
                <Link 
                    to="/projects/$projectId" 
                    params={{ projectId: id }} 
                    className="w-full" 
                    resetScroll={true}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                >
                    <Button className="w-full">
                        {m.projectCardViewButton()}
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}


export function ProjectCardList() {
    return (
        <div className="mt-16 bg-muted/50 rounded-2xl p-8 border border-border/50 flex flex-col items-center justify-center min-h-75 w-full">
            <h3 className="text-3xl font-semibold mb-4 text-foreground/80">{m.socialProofProjectsHeader()}</h3>
            <p className="text-muted-foreground max-w-md text-center mb-8">{m.socialProofProjectsDesc()}</p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        tags={project.tags}
                    />
                ))}
            </div>
        </div>
    );
}
