import { MetadataRoute } from 'next';

const baseUrl = 'https://seiren-inc.co.jp';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/business',
    '/company',
    '/contact',
    '/partner',
    '/privacy',
    '/strength',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
