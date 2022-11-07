export default {
  titleTemplate: '%s | LoopAI',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
  additionalMetaTags: [
    {
      name: 'theme-color',
      content: '#FFFFFF',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    site_name: 'LoopAI',
    images: [{ url: 'https://example.com/example_square_image.png' }],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
