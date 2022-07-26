import '@styles/common/globals.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from 'seo.config';
import { appWithTranslation } from 'next-i18next';
import '/public/static/fonts/styles.scss';
import 'react-h5-audio-player/src/styles.scss';

const queryClient = new QueryClient();

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <DefaultSeo {...SEO} />
        {getLayout(<Component {...pageProps} />)}
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
