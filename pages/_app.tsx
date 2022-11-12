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
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
});
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const router = useRouter();

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(FB_PIXEL_ID as string);
        ReactPixel.pageView();
        router.events.on('routeChangeComplete', ReactPixel.pageView);
      });
  }, [router.events]);
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <DefaultSeo {...SEO} />
        {getLayout(<Component {...pageProps} />)}
        <Toaster position="top-center" reverseOrder={false} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
