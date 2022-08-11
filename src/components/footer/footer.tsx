import AudioPlayer from 'react-h5-audio-player';
import H5AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { useRecoilState, useRecoilValue } from 'recoil';
import React, { useEffect, useRef } from 'react';
import { audioState, muteState, playState, volumeState } from '@src/store/atom';
import '/styles/footer.module.scss';

export default function Footer() {
  const audio = useRecoilValue(audioState);
  const myRef = useRef<H5AudioPlayer | null>(null);
  const [play, setPlay] = useRecoilState(playState);
  const volume = useRecoilValue(volumeState);
  const mute = useRecoilValue(muteState);

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
            <AudioPlayer
              className="music-player"
              src={audio}
              customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
              customVolumeControls={[RHAP_UI.LOOP, RHAP_UI.VOLUME]}
              customAdditionalControls={[<div>앨범</div>]}
              customControlsSection={[
                RHAP_UI.MAIN_CONTROLS,
                RHAP_UI.CURRENT_TIME,
                <div>/</div>,
                RHAP_UI.DURATION,
                RHAP_UI.ADDITIONAL_CONTROLS,
                RHAP_UI.VOLUME_CONTROLS,
              ]}
              ref={myRef}
              onEnded={onMusicEnd}
              showSkipControls={true}
              showJumpControls={false}
              showDownloadProgress={false}
              hasDefaultKeyBindings={false}
            />
          </div>
        </div>
      )}
    </>
  );
}
