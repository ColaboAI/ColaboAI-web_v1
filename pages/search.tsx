import type { ReactElement } from 'react';
import Layout from '@src/components/layout/layout';
import type { NextPageWithLayout } from './_app';
import { NextSeo } from 'next-seo';

const Search: NextPageWithLayout = () => {
  return (
    <div>
      <NextSeo
        title="search"
        description="search description"
        canonical="https://colabo.ai"
        openGraph={{
          url: 'https://colabo.ai',
        }}
      />
      <section>
        <h2>Layout Example (Search)</h2>
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

Search.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Search;
