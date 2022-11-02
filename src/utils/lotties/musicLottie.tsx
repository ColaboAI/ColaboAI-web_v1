import React from 'react';
import Lottie from 'react-lottie';
import animationData from '@public/lottie/musicWave.json';

const MusicLottie = () => {
  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={65} width={300} />
    </div>
  );
};

export default MusicLottie;
