// @ts-expect-error - paraglide runtime import
import { localizeHref as paraglideLocalizeHref } from '@/paraglide/runtime';

const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '');

export function getBasePath(): string {
    return BASE_PATH || '';
}

export function withBase(href: string): string {
    if (!href) return href;
    const base = getBasePath();
    if (!base) return href;
    if (href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return href;
    }
    if (href.startsWith('/')) {
        return `${base}${href}`;
    }
    return `${base}/${href}`;
}

export function withoutBase(href: string): string {
    const base = getBasePath();
    if (!base) return href;
    if (href.startsWith(base)) {
        return href.slice(base.length) || '/';
    }
    return href;
}

export function localizeHref(href: string, locale?: string): string {
    const localized = paraglideLocalizeHref(href, locale ? { locale } : undefined);
    return withBase(localized);
}

export function localizeHrefWithoutBase(href: string, locale?: string): string {
    return paraglideLocalizeHref(href, locale ? { locale } : undefined);
}
