import React from 'react';
import Slider from '@mui/material/Slider';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { muteState, volumeState } from '@src/store/atom';

export default function VolumeSlider() {
  const [volume, setVolume] = useRecoilState(volumeState);
  const setMute = useSetRecoilState(muteState);

  const onChange = (value: number) => {
    setVolume(value);
    setMute(false);
  };
  return (
    <Slider
      aria-label="Volume"
      value={volume}
      onChange={(_, value) => onChange(value as number)}
      sx={{
        position: 'relative',
        height: 4,
        top: '10px',
        width: '8%',
        color: '#616891',
        '& .MuiSlider-track': {
          border: 'none',
        },
        '& .MuiSlider-thumb': {
          width: 8,
          height: 8,
          backgroundColor: '#fff',
          '&:before': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
          },
          '&:hover, &.Mui-focusVisible, &.Mui-active': {
            boxShadow: 'none',
          },
        },
      }}
    />
  );
}
