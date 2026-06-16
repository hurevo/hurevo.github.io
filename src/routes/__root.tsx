import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';
import { useEffect, useLayoutEffect, useMemo } from 'react';
// @ts-expect-error - paraglide runtime is auto-generated
import { setLocale, getLocaleForUrl, getLocale } from '../paraglide/runtime';
import NavbarSection from '@/components/sections/navbar';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';
import { withoutBase } from '@/lib/url';

export const Route = createRootRoute({
    component: RootRoute,
});

// Use layout effect for DOM synchronization to avoid setState warnings
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function RootRoute() {
    const location = useLocation();
    
    // Compute locale from URL during render - this is deterministic
    const locale = useMemo(() => {
        try {
            const urlForLocale = withoutBase(location.href);
            return getLocaleForUrl(urlForLocale);
        } catch {
            return 'en';
        }
    }, [location.href]);
    
    // Sync paraglide locale and document lang using layout effect
    // This runs before paint, avoiding the setState in effect warning
    useIsomorphicLayoutEffect(() => {
        try {
            const currentParaglideLocale = getLocale();
            if (locale !== currentParaglideLocale) {
                setLocale(locale, { reload: false });
            }
            document.documentElement.lang = locale;
        } catch {
            // Silently handle errors
        }
    }, [locale]);

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
