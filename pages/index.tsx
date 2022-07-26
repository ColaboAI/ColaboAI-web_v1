import type { ReactElement } from 'react';
import Layout from '../src/components/layout';
import type { NextPageWithLayout } from './_app';
import { NextSeo } from 'next-seo';
import usePlay from '@src/hooks/usePlay';
import { IoMdPause, IoMdPlay } from 'react-icons/io';
import useSound from 'use-sound';

const Home: NextPageWithLayout = () => {
  const musicList = [
    {
      id: 'demo',
      musicUrl: useSound('/public/mp3/demo.mp3'),
    },
    {
      id: 'demo2',
      musicUrl: useSound('/public/mp3/demo2.mp3'),
    },
  ];

  const [play, playId, start, stop] = usePlay();

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
      {musicList.map((music) => (
        <div key={music.id}>
          {playId === music.id && play ? (
            <button onClick={stop}>
              <IoMdPause />
            </button>
          ) : (
            <button onClick={() => start(music)}>
              <IoMdPlay />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
