import React from 'react';
import { useMediaQuery } from 'react-responsive';

type ReturnType = [boolean, () => void, () => void];

const useHeart = (): ReturnType => {
  const [heart, setHeart] = useRecoilState(heartState);

  const fillHeart = () => {
    setHeart(true);
  };

  const unFillHeart = () => {
    setHeart(false);
  };

  return [heart, fillHeart, unFillHeart];
};

export default useHeart;
