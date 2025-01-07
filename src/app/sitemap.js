import { pastaData } from '@/lib/pastaData';

export default function sitemap() {
  const urlData = Object.keys(pastaData).map((pasta) => {
    return {
      url: `${process.env.HOST_URL}/${pasta}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    };
  });

  return [
    {
      url: process.env.HOST_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    ...urlData,
  ];
}
