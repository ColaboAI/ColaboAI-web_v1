import type { ReactElement } from 'react';
import Layout from '@src/components/layout/layout';
import type { NextPageWithLayout } from './_app';
import { NextSeo } from 'next-seo';
import usePlay from '@src/hooks/usePlay';
import { IoMdArrowRoundDown, IoMdHeartEmpty, IoMdPause, IoMdPlay, IoMdShare, IoMdStarOutline } from 'react-icons/io';
import styles from '/styles/index.module.scss';

const musicList = [
  {
    id: 1,
    musicUrl: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3',
    musicName: '운이 좋았지',
    musicArtist: '권진아',
  },
  {
    id: 2,
    musicUrl: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
    musicName: "Drivin'(feat.래원(Layone), BIG Naughty",
    musicArtist: '김승민',
  },
  {
    id: 3,
    musicUrl: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3',
    musicName: '여름 밤에 쓴 노래(with MVP)(Prod.BIG Naughty)',
    musicArtist: 'BIG Naughty, 릴러말즈(Leellamarz)',
  },
  {
    id: 4,
    musicUrl: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3',
    musicName: 'Somebody!',
    musicArtist: '로꼬 및 화사',
  },
  {
    id: 5,
    musicUrl: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
    musicName: '안았어야해(feat. 퓨처리스틱 스웨버)',
    musicArtist: 'JAEHA',
  },
  {
    id: 6,
    musicUrl: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3',
    musicName: 'Fix you',
    musicArtist: '스키니 브라운',
  },
  {
    id: 7,
    musicUrl: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3',
    musicName: '오아시스',
    musicArtist: '한요한',
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
      <div className={styles.playList}>
        <div className={styles.playListHeader}>
          <p>AI BGM TOP 10</p>
        </div>
        {musicList.map((music) => (
          <div className={styles.musicContainer} key={music.id}>
            <div>{music.id}</div>
            <div className={styles.album}>앨범</div>
            <div className={styles.start}>
              {playId === music.id && play ? (
                <IoMdPause size={25} onClick={stop} />
              ) : (
                <IoMdPlay size={25} onClick={() => start(music)} />
              )}
            </div>
            <div className={styles.musicName}>{music.musicName}</div>
            <div className={styles.musicArtist}>{music.musicArtist}</div>
            <div className={styles.icons}>
              <div>
                <IoMdHeartEmpty size={25} />
              </div>
              <div>
                <IoMdArrowRoundDown size={25} />
              </div>
              <div>
                <IoMdStarOutline size={25} />
              </div>
              <div>
                <IoMdShare size={25} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Index;
