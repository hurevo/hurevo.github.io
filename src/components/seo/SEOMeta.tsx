import { Helmet } from 'react-helmet-async';
// @ts-expect-error - paraglide messages import
import * as m from '@/paraglide/messages';

interface SEOMetaProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
}

export function SEOMeta({
    title,
    description,
    image = "https://hurevo.cloud/og-image.png",
    url = "https://hurevo.cloud/",
    type = "website",
}: SEOMetaProps) {
    const defaultTitle = m.seoDefaultTitle() as string;
    const resolvedTitle = title ?? defaultTitle;
    const resolvedDescription = description ?? (m.seoDefaultDescription() as string);
    const fullTitle = resolvedTitle === defaultTitle ? resolvedTitle : `${resolvedTitle} | Hurevo`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={resolvedDescription} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={resolvedDescription} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={resolvedDescription} />
            <meta property="twitter:image" content={image} />

            {/* Canonical Link */}
            <link rel="canonical" href={url} />
        </Helmet>
    );
}
