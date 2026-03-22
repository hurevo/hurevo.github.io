import React from 'react';
// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';
// @ts-expect-error - paraglide runtime import
import { localizeHref } from '@/paraglide/runtime';
import HurevoLogo from '@/components/logos/hurevo';
import { LanguageSwitcher } from '@/components/ui/language-switcher';

interface LegalLink {
    text: string;
    href: string;
}

interface ServiceLink {
    text: string;
    href: string;
}

export function Footer(): React.JSX.Element {
    const serviceLinks: ServiceLink[] = [
        { text: m.service1Title(), href: '/#services-section' },
        { text: m.service2Title(), href: '/#services-section' },
        { text: m.service3Title(), href: '/#services-section' },
        { text: m.service4Title(), href: '/#services-section' },
    ];

    const legalLinks: LegalLink[] = [
        { text: m.footerTermsOfService?.() ?? 'Terms of Service', href: localizeHref('/terms') },
        { text: m.footerPrivacyPolicy?.() ?? 'Privacy Policy', href: localizeHref('/privacy') },
    ];

    return (
        <footer className="w-full border-t border-border mt-16">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <a href="/#" className="flex items-center gap-2 text-lg font-bold mb-3">
                            <HurevoLogo />
                            Hurevo
                        </a>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {m.footerTagline()}
                        </p>
                        <div className="flex items-center gap-4">
                            <a href={`mailto:${m.footerEmail()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                {m.footerEmail()}
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-semibold mb-3">{m.footerServices()}</h4>
                        <ul className="space-y-2">
                            {serviceLinks.map((link) => (
                                <li key={link.text}>
                                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-sm font-semibold mb-3">Connect</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://linkedin.com/company/hurevo" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {m.footerLinkedIn()}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${m.footerEmail()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {m.footerEmail()}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-semibold mb-3">{m.footerLegal?.() ?? 'Legal'}</h4>
                        <ul className="space-y-2">
                            {legalLinks.map((link) => (
                                <li key={link.text}>
                                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground opacity-70">
                        &copy; {new Date().getFullYear()} {m.footerCopyright()}
                    </p>
                    <LanguageSwitcher />
                </div>
            </div>
        </footer>
    );
}
