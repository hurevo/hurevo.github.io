import { type VariantProps } from "class-variance-authority";
import { Menu } from "lucide-react";
import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";
import {
    Navbar as NavbarComponent,
    NavbarLeft,
    NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import HurevoLogo from "@/components/logos/hurevo";
// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';

interface NavbarLink {
    text: string;
    href: string;
}

interface NavbarActionProps {
    text: string;
    href: string;
    variant?: VariantProps<typeof buttonVariants>["variant"];
    icon?: ReactNode;
    iconRight?: ReactNode;
    isButton?: boolean;
}

interface NavbarProps {
    logo?: ReactNode;
    name?: string;
    homeUrl?: string;
    mobileLinks?: NavbarLink[];
    actions?: NavbarActionProps[];
    showNavigation?: boolean;
    customNavigation?: ReactNode;
    className?: string;
}

export default function NavbarSection({
    logo = <HurevoLogo />,
    name = "Hurevo",
    homeUrl = "/#",
    className,
}: NavbarProps) {
    const navLinks: NavbarLink[] = [
        { text: m.navServices(), href: "/#services-section" },
        { text: m.navProcess(), href: "/#process-section" },
        { text: m.navIndustries(), href: "/#industry-section" },
        { text: m.navPortfolio(), href: "/#portfolio-section" },
    ];

    const actions: NavbarActionProps[] = [
        {
            text: m.navCTA(),
            href: "/#contact-section",
            isButton: true,
            variant: "default",
        },
    ];

    return (
        <header className={cn("sticky top-0 z-50 pt-4 px-4", className)}>
            <div className="max-w-6xl relative mx-auto bg-background/60 backdrop-blur-md rounded-full px-5">
                <NavbarComponent>
                    <NavbarLeft>
                        <a
                            href={homeUrl}
                            className="flex items-center gap-2 text-xl font-bold mr-6"
                        >
                            {logo}
                            {name}
                        </a>
                        <nav className="hidden md:flex gap-8 ml-8 items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link.text}
                                </a>
                            ))}
                        </nav>
                    </NavbarLeft>
                    <NavbarRight>
                        {actions.map((action) =>
                            action.isButton ? (
                                <Button
                                    key={action.href}
                                    variant={action.variant || "default"}
                                    onClick={() => { window.location.href = action.href; }}
                                >
                                    {action.icon}
                                    {action.text}
                                    {action.iconRight}
                                </Button>
                            ) : (
                                <a
                                    key={action.href}
                                    href={action.href}
                                    className="hidden text-sm md:block"
                                >
                                    {action.text}
                                </a>
                            ),
                        )}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="shrink-0 md:hidden"
                                >
                                    <Menu className="size-5" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <nav className="grid gap-6 text-lg font-medium">
                                    <a
                                        href={homeUrl}
                                        className="flex items-center gap-2 text-xl font-bold"
                                    >
                                        {logo}
                                        <span>{name}</span>
                                    </a>
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            {link.text}
                                        </a>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </NavbarRight>
                </NavbarComponent>
            </div>
        </header>
    );
}
