import '../styles/globals.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from 'seo.config';
import { appWithTranslation } from 'next-i18next';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
