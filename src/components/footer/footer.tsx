import AudioPlayer from 'react-h5-audio-player';
import H5AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { useRecoilState, useRecoilValue } from 'recoil';
import React, { useEffect, useRef } from 'react';
import {
  audioState,
  coverAlbumState,
  musicArtistState,
  musicNameState,
  muteState,
  playState,
  volumeState,
} from '@src/store/atom';
import styles from '/styles/footer.module.scss';
import Image from 'next/image';
import { Mobile, DesktopOrTablet } from '@src/hooks/useMediaQuery';

export default function Footer() {
  const audio = useRecoilValue(audioState);
  const myRef = useRef<H5AudioPlayer | null>(null);
  const [play, setPlay] = useRecoilState(playState);
  const volume = useRecoilValue(volumeState);
  const mute = useRecoilValue(muteState);
  const musicName = useRecoilValue(musicNameState);
  const musicArtist = useRecoilValue(musicArtistState);
  const coverAlbum = useRecoilValue(coverAlbumState);

  const onMusicEnd = () => {
    setPlay(false);
  };
  const onPlay = () => {
    setPlay(true);
  };
  const onPause = () => {
    setPlay(false);
  };

  useEffect(() => {
    if (!myRef.current?.audio.current) return;
    if (play) {
      myRef.current.audio.current.play();
      myRef.current.audio.current.volume = mute ? 0 : volume / 100;
    } else myRef.current.audio.current.pause();
  }, [play, audio, volume, mute]);

  return (
    <>
      <DesktopOrTablet>
        <>
          {audio && (
            <div className={styles.footer}>
              <div className={styles['footer-inner']}>
                <AudioPlayer
                  className={styles['music-player']}
                  src={audio}
                  customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
                  customVolumeControls={[RHAP_UI.LOOP, RHAP_UI.VOLUME]}
                  customAdditionalControls={[
                    <div className={styles['music-info']} key="music">
                      <div className={styles['music-album']}>
                        <Image src={coverAlbum} width={50} height={50} />
                      </div>
                      <div className={styles['music-name']}>{musicName}</div>
                      <div className={styles['music-artist']}>{musicArtist}</div>
                    </div>,
                  ]}
                  customControlsSection={[
                    RHAP_UI.MAIN_CONTROLS,
                    RHAP_UI.CURRENT_TIME,
                    <div key="slash">/</div>,
                    RHAP_UI.DURATION,
                    RHAP_UI.ADDITIONAL_CONTROLS,
                    RHAP_UI.VOLUME_CONTROLS,
                  ]}
                  ref={myRef}
                  showSkipControls={true}
                  showJumpControls={false}
                  showDownloadProgress={false}
                  hasDefaultKeyBindings={false}
                  onPlay={onPlay}
                  onPause={onPause}
                  onEnded={onMusicEnd}
                />
              </div>
            </div>
          )}
        </>
      </DesktopOrTablet>
      <Mobile>
        <>
          {audio && (
            <div className={styles.footer}>
              <div className={styles['footer-inner']}>
                <AudioPlayer
                  className={styles['music-player']}
                  src={audio}
                  layout="stacked-reverse"
                  customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
                  customAdditionalControls={[
                    <div className={styles['music-info']} key="music">
                      <div className={styles['music-album']}>
                        <Image src={coverAlbum} width={50} height={50} />
                      </div>
                      <div>
                        <div className={styles['music-name']}>{musicName}</div>
                        <div className={styles['music-artist']}>{musicArtist}</div>
                      </div>
                    </div>,
                  ]}
                  customControlsSection={[RHAP_UI.ADDITIONAL_CONTROLS, RHAP_UI.MAIN_CONTROLS]}
                  ref={myRef}
                  showSkipControls={true}
                  showJumpControls={false}
                  showDownloadProgress={false}
                  hasDefaultKeyBindings={false}
                  onPlay={onPlay}
                  onPause={onPause}
                  onEnded={onMusicEnd}
                />
              </div>
            </div>
          )}
        </>
      </Mobile>
    </>
  );
}
