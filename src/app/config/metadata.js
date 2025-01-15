export const siteConfig = {
  name: 'Find Your Pasta',
  url: process.env.HOST_URL,
  creator: 'tomhyhan',
};

export const defaultMetadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name}`,
  },
  description:
    'Find & learn your pasta shape. Never be confused by pasta menus again! Explore various authentic Italian pasta shapes, learn their perfect sauce pairings, and order with confidence at any restaurant.',

  icons: {
    icon: '/api/favicon',
    shortcut: '/api/favicon',
    apple: '/api/favicon',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/api/favicon',
    },
  },

  keywords: [
    'pasta',
    'Italian food',
    'pasta shapes',
    'pasta noodles',
    'Italian cuisine',
    'Spaghetti',
    'Fettuccine',
    'Penne',
    'Rigatoni',
    'Macaroni',
    'Linguine',
    'Farfalle',
    'Tagliatelle',
    'Fusilli',
    'Orzo',
    'Conchiglie',
    'Bucatini',
    'Orecchiette',
    'Ravioli',
    'Tortellini',
    'Fregola',
  ],
  category: 'Food & Cooking',

  openGraph: {
    title: `${siteConfig.name}`,
    description:
      'Find & learn your pasta shape, Never be confused by pasta menus again! Explore various authentic Italian pasta shapes, learn their perfect sauce pairings, and order with confidence at any restaurant.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/api/og`,
        width: 1200,
        height: 630,
        alt: 'Pasta Emoji',
      },
    ],
  },

  applicationName: siteConfig.name,
  authors: [
    {
      name: siteConfig.creator,
      url: `https://github.com/${siteConfig.creator}`,
    },
  ],
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};
