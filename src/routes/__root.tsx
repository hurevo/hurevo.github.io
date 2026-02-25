import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
// @ts-ignore
import { setLocale, getLocaleForUrl, getLocale } from '../paraglide/runtime';
import NavbarSection from '@/components/sections/navbar';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';

export const Route = createRootRoute({
    component: RootRoute,
});

function RootRoute() {
    const location = useLocation();
    const [locale, setReactLocale] = useState(() => {
        try {
            return getLocale();
        } catch (e) {
            return 'en';
        }
    });

    useEffect(() => {
        try {
            const urlLocale = getLocaleForUrl(window.location.href);
            if (urlLocale !== locale) {
                setLocale(urlLocale, { reload: false });
                setReactLocale(urlLocale);
                document.documentElement.lang = urlLocale;
            }
        } catch (e) {
            console.error(e);
        }
    }, [location.href, locale]);

    return (
        <div key={locale} className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30 flex flex-col">
            <NavbarSection />
            <main className="flex flex-col items-center w-full grow">
                <Outlet />
            </main>
            <div className="w-full mt-auto">
                <ContactSection />
                <Footer />
            </div>
        </div>
    );
}
