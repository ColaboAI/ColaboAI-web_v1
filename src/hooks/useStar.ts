import { useRecoilState } from 'recoil';
import { starState } from 'src/store/atom';

type ReturnType = [boolean, () => void, () => void];

const useStar = (): ReturnType => {
  const [star, setStar] = useRecoilState(starState);

  const fill = () => {
    setStar(true);
  };

  const unFill = () => {
    setStar(false);
  };

  return [star, fill, unFill];
};

export default useStar;
