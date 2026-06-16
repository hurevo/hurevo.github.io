import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { HelmetProvider } from 'react-helmet-async';
import { routeTree } from './routeTree.gen';
import { ThemeProvider } from './components/theme-provider';
import './index.css';

// @ts-expect-error - paraglide runtime import
import { deLocalizeUrl, localizeUrl } from './paraglide/runtime';
import { getBasePath } from './lib/url';

const BASE_PATH = getBasePath();

const router = createRouter({
    routeTree,
    basepath: BASE_PATH || undefined,
    scrollRestoration: true,
    rewrite: {
        input: ({ url }) => deLocalizeUrl(url),
        output: ({ url }) => localizeUrl(url),
    },
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <ThemeProvider defaultTheme="system" storageKey="hurevo-theme">
                <RouterProvider router={router} />
            </ThemeProvider>
        </HelmetProvider>
    </StrictMode>
);
