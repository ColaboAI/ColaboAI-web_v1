import { useRecoilState } from 'recoil';
import { heartState } from 'src/store/atom';

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
