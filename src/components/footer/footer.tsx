import AudioPlayer from 'react-h5-audio-player';
import H5AudioPlayer from 'react-h5-audio-player';
import { useRecoilState, useRecoilValue } from 'recoil';
import React, { useEffect, useRef } from 'react';
import { audioState, muteState, playState, volumeState } from '@src/store/atom';
import { MdPause, MdPlayArrow, MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import PlayStatus from '@src/components/footer/playStatus';
import VolumeStatus from '@src/components/footer/volumeStatus';
import 'styles/footer.module.scss';

export default function Footer() {
  const audio = useRecoilValue(audioState);
  const myRef = useRef<H5AudioPlayer | null>(null);
  const [play, setPlay] = useRecoilState(playState);
  const volume = useRecoilValue(volumeState);
  const mute = useRecoilValue(muteState);

  const start = () => {
    if (myRef.current?.audio.current) myRef.current.audio.current.volume = volume / 100;
    setPlay(true);
  };

  const stop = () => {
    setPlay(false);
  };

  const onMusicEnd = () => {
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
      {audio && (
        <div className="footer">
          <div className="footer-inner">
            <button className="footer-button">
              <MdSkipPrevious />
            </button>
            {play ? (
              <button className="footer-button" onClick={stop}>
                <MdPause />
              </button>
            ) : (
              <button className="footer-button" onClick={start}>
                <MdPlayArrow />
              </button>
            )}
            <button className="footer-button">
              <MdSkipNext />
            </button>
            <AudioPlayer
              className="music-status"
              src={audio}
              ref={myRef}
              onEnded={onMusicEnd}
              layout="horizontal-reverse"
              hasDefaultKeyBindings={false}
            />
            <VolumeStatus />
            <PlayStatus />
          </div>
        </div>
      )}
    </>
  );
}
