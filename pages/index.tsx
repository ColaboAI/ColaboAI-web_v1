import type { ReactElement } from 'react';
import Layout from '../src/components/layout';
import type { NextPageWithLayout } from './_app';
import { NextSeo } from 'next-seo';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <NextSeo
        title="home"
        description="home description"
        canonical="https://colabo.ai"
        openGraph={{
          url: 'https://colabo.ai',
        }}
      />
      <section>
        <h2>인공지능으로 작곡한 음악 저작권 걱정없이 무료로 이용하세요.</h2>
        <p>
          This example adds a property <code>getLayout</code> to your page, allowing you to return a React component for
          the layout. This allows you to define the layout on a per-page basis. Since we are returning a function, we
          can have complex nested layouts if desired.
        </p>
        <p>
          When navigating between pages, we want to persist page state (input values, scroll position, etc) for a
          Single-Page Application (SPA) experience.
        </p>
        <p>
          This layout pattern will allow for state persistence because the React component tree is persisted between
          page transitions. To preserve state, we need to prevent the React component tree from being discarded between
          page transitions.
        </p>
        <h3>Try It Out</h3>
        <p>
          To visualize this, try tying in the search input in the <code>Sidebar</code> and then changing routes. You
          will notice the input state is persisted.
        </p>
      </section>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
