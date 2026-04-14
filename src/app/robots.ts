import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/aftercare/', '/api/aftercare/'],
    },
    sitemap: 'https://seiren-inc.co.jp/sitemap.xml',
  };
}
