import { type VariantProps } from "class-variance-authority";
import { Menu } from "lucide-react";
import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import {
    Navbar as NavbarComponent,
    NavbarLeft,
    NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import HurevoLogo from "@/components/logos/hurevo";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';
// @ts-expect-error - paraglide runtime import
import { localizeHref } from '@/paraglide/runtime';

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
    homeUrl = "/",
    className,
}: NavbarProps) {
    const navLinks: NavbarLink[] = [
        { text: m.navServices(), href: localizeHref("/#services-section") },
        { text: m.navCloud(), href: localizeHref("/cloud") },
        { text: m.navProcess(), href: localizeHref("/#process-section") },
        { text: m.navIndustries(), href: localizeHref("/#industry-section") },
        { text: m.navPortfolio(), href: localizeHref("/#portfolio-section") },
    ];

    const actions: NavbarActionProps[] = [
        {
            text: m.navCTA(),
            href: localizeHref("/#contact-section"),
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
                            href={localizeHref(homeUrl)}
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
                                    onClick={() => { window.location.href = localizeHref(action.href); }}
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
                        <ThemeToggle />
                        <LanguageSwitcher className="hidden md:flex ml-2" />
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="shrink-0 md:hidden"
                                >
                                    <Menu className="size-5" />
                                    <span className="sr-only">{m.navMenuToggle()}</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <nav className="grid gap-6 text-lg font-medium">
                                    <div className="flex items-center justify-between">
                                        <a
                                            href={localizeHref(homeUrl)}
                                            className="flex items-center gap-2 text-xl font-bold"
                                        >
                                            {logo}
                                            <span>{name}</span>
                                        </a>
                                        <div className="flex items-center gap-2">
                                            <ThemeToggle />
                                            <LanguageSwitcher />
                                        </div>
                                    </div>
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
