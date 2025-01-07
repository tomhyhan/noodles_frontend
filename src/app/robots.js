export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${process.env.HOST_URL}/sitemap.xml`,
  };
}
