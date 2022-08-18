import type { ReactElement } from 'react';
import Layout from '@src/components/layout/layout';
import type { NextPageWithLayout } from './_app';
import { NextSeo } from 'next-seo';
import usePlay from '@src/hooks/usePlay';
import { IoMdPause, IoMdPlay } from 'react-icons/io';
import styles from '/styles/index.module.scss';

const musicList = [
  {
    id: 0,
    musicUrl: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3',
  },
  {
    id: 1,
    musicUrl: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
  },
  {
    id: 2,
    musicUrl: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3',
  },
  {
    id: 3,
    musicUrl: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3',
  },
  {
    id: 4,
    musicUrl: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
  },
  {
    id: 5,
    musicUrl: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3',
  },
  {
    id: 6,
    musicUrl: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3',
  },
];

const Index: NextPageWithLayout = () => {
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
      <div className={styles.background}>
        <video muted autoPlay loop>
          <source src="/mp4/background.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.title}>
        <p>
          인공지능으로 작곡한 음악 <br />
          저작권 걱정없이 무료로 이용하세요
        </p>
        <button>시작하기</button>
      </div>
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

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Index;
