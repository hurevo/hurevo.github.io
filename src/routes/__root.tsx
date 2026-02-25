import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
// @ts-ignore
import { setLocale, getLocaleForUrl, getLocale } from '../paraglide/runtime';

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
    <div key={locale}>
      <Outlet />
    </div>
  );
}
