import type { ReactElement } from 'react';
import Layout from '../src/components/layout';
import type { NextPageWithLayout } from './_app';
import { NextSeo } from 'next-seo';
import usePlay from '@src/hooks/usePlay';
import { IoMdPause, IoMdPlay } from 'react-icons/io';

const musicList = [
  {
    id: '1',
    musicUrl: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3',
  },
  {
    id: '2',
    musicUrl: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
  },
  {
    id: '3',
    musicUrl: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3',
  },
];

const Home: NextPageWithLayout = () => {
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
