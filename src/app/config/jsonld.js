export const defaultjsonld = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Find Your Pasta 🍝',
  description:
    'Never be confused by pasta menus again! Explore various authentic Italian pasta shapes, learn their perfect sauce pairings, and order with confidence at any restaurant.',
  url: process.env.HOST_URL,
  creator: 'tomhyhan',
};

export const pastajsonld = (noodles, description) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'AnalysisNewsArticle', // More appropriate type for analysis results
    headline: `Pasta Classification Result: ${noodles}`,
    description: description,
    about: {
      '@type': 'Food',
      name: noodles,
      description: description,
      category: 'Pasta',
    },
    disambiguatingDescription: 'AI-powered pasta shape classification result',
    articleBody: description,
    specialty: 'Image Classification',
    keywords: [
      'pasta classification',
      'AI analysis',
      'pasta types',
      noodles.toLowerCase(),
    ],
  };
};
