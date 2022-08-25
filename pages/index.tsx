import type { ReactElement } from 'react';
import Layout from '@src/components/layout/layout';
import type { NextPageWithLayout } from './_app';
import { NextSeo } from 'next-seo';
import usePlay from '@src/hooks/usePlay';
import Link from 'next/link';
import {
  IoMdArrowRoundDown,
  IoMdHeartEmpty,
  IoMdHeart,
  IoMdPause,
  IoMdPlay,
  IoMdShare,
  IoMdStarOutline,
  IoMdStar,
} from 'react-icons/io';
import styles from '/styles/index.module.scss';
import { useRecoilValue } from 'recoil';
import { musicListState } from '@src/store/atom';
import useHeart from '@src/hooks/useHeart';
import useStar from '@src/hooks/useStar';

const Index: NextPageWithLayout = () => {
  const [play, musicId, start, stop] = usePlay();
  const [heart, fillHeart, unFillHeart] = useHeart();
  const [star, fillStar, unFillStar] = useStar();
  const musicList = useRecoilValue(musicListState);

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
          <source src="/mp4/index_background.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.title}>
        <p>
          인공지능으로 작곡한 음악 <br />
          저작권 걱정없이 무료로 이용하세요
        </p>
        <Link href="/register">
          <button>시작하기</button>
        </Link>
      </div>
      <div className={styles.playList}>
        <div className={styles.playListHeader}>
          <p>AI BGM TOP 10</p>
        </div>
        {musicList.map((music) => (
          <div className={styles.musicContainer} key={music.musicId}>
            <div>{music.musicId}</div>
            <div className={styles.album}>앨범</div>
            <div className={styles.start}>
              {musicId === music.musicId && play ? (
                <IoMdPause size={25} onClick={stop} />
              ) : (
                <IoMdPlay size={25} onClick={() => start(music)} />
              )}
            </div>
            <div className={styles.musicName}>{music.musicName}</div>
            <div className={styles.musicArtist}>{music.musicArtist}</div>
            <div className={styles.icons}>
              {!heart ? (
                <div>
                  <IoMdHeartEmpty onClick={fillHeart} size={25} />
                </div>
              ) : (
                <div>
                  <IoMdHeart onClick={unFillHeart} size={25} />
                </div>
              )}
              <div>
                <IoMdArrowRoundDown size={25} />
              </div>
              {!star ? (
                <div>
                  <IoMdStarOutline onClick={fillStar} size={25} />
                </div>
              ) : (
                <div>
                  <IoMdStar onClick={unFillStar} size={25} />
                </div>
              )}
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
