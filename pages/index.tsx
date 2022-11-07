import type { ReactElement } from 'react';
import Layout from '@src/components/layout/layout';
import type { NextPageWithLayout } from './_app';
import { NextSeo } from 'next-seo';
import usePlay from '@src/hooks/usePlay';
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
import useHeart from '@src/hooks/useHeart';
import useStar from '@src/hooks/useStar';
import useMusicQuery from '@src/queries/music.queries';
import Image from 'next/image';
import { Mobile, DesktopOrTablet } from '@src/hooks/useMediaQuery';
import MusicLottie from '@src/utils/lotties/musicLottie';
import Proto from '@src/utils/proto';
import { useRecoilState } from 'recoil';
import { currentIndexState } from '@src/store/atom';
import { useEffect, useRef } from 'react';

const Index: NextPageWithLayout = () => {
  const [start, stop, restart, play, musicId] = usePlay();
  const [heart, fillHeart, unFillHeart] = useHeart();
  const [star, fillStar, unFillStar] = useStar();
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState);
  const { data, isLoading } = useMusicQuery();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex !== -1 && data !== undefined) {
      start(data[currentIndex]);
    }
  }, [currentIndex]);

  if (isLoading || data === undefined) {
    return <div>로딩 중...</div>;
  }

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
      <DesktopOrTablet>
        <>
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
            {/*<Link href="/login">*/}
            <button
              onClick={() => {
                if (divRef.current !== null) {
                  divRef.current.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
              시작하기
            </button>
            {/*</Link>*/}
          </div>
          <div className={styles.playList}>
            <div className={styles.playListHeader}>
              <p>AI BGM SAMPLE</p>
            </div>
            {data.map((music, currentIndex) => (
              <div className={styles.musicContainer} key={music.id}>
                <div>{music.id}</div>
                <div className={styles.album}>
                  <Image src={music.cover_image_url} width={60} height={60} />
                </div>
                <div className={styles.start}>
                  {musicId === music.id && play ? (
                    <IoMdPause size={25} onClick={stop} />
                  ) : (
                    <IoMdPlay
                      size={25}
                      onClick={() => {
                        setCurrentIndex(currentIndex);
                        restart();
                      }}
                    />
                  )}
                </div>
                <div className={styles.musicName}>{music.title}</div>
                <div className={styles.musicArtist}>{music.artist_name}</div>
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
            <div ref={divRef}>
              <Proto />
            </div>
          </div>
        </>
      </DesktopOrTablet>
      <Mobile>
        <>
          <div className={styles.background}>
            <video muted autoPlay loop playsInline={true}>
              <source src="/mp4/index_background.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles.title}>
            <p>
              <span style={{ color: '#00ffff' }}>인공지능</span>
              으로 작곡한 음악 <br />
              이제는 <span style={{ color: '#00ffff' }}>저작권 </span>
              걱정없이
            </p>
            <div className={styles.subtitle}>
              <p>
                숏폼 콘텐츠 제작에 필요한 배경음악
                <br />
                이제 무제한으로 즐기세요
              </p>
            </div>
            <MusicLottie />
          </div>
          <div className={styles.playList}>
            <div className={styles.playListHeader}>
              <p>AI MUSIC</p>
            </div>
            {data.map((music, currentIndex) => (
              <div className={styles.musicContainer} key={music.id}>
                <div className={styles.album}>
                  <Image src={music.cover_image_url} width={50} height={50} />
                </div>
                <div className={styles.start}>
                  {musicId === music.id && play ? (
                    <IoMdPause size={20} onClick={stop} />
                  ) : (
                    <IoMdPlay
                      size={20}
                      onClick={() => {
                        setCurrentIndex(currentIndex);
                        restart();
                      }}
                    />
                  )}
                </div>
                <div className={styles.musicName}>{music.title}</div>
                <div className={styles.musicArtist}>{music.artist_name}</div>
              </div>
            ))}
            <div style={{ width: '300px' }}>
              <Proto />
            </div>
          </div>
        </>
      </Mobile>
    </div>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Index;
