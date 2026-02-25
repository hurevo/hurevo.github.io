import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import './index.css';

// @ts-ignore
import { deLocalizeUrl, localizeUrl } from './paraglide/runtime';

// Create a new router instance
const router = createRouter({
  routeTree,
  // Add Paraglide URL rewriting for localized paths
  // Using explicit localizer paths will configure the router correctly without the helper library overhead right now
  rewrite: {
    input: ({ url }) => deLocalizeUrl(url),
    output: ({ url }) => localizeUrl(url),
  }
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
