import { useQuery } from '@tanstack/react-query';
import { AudioTypes } from '../../types/music';
import { getMusic } from '@src/api/api';
import { useSetRecoilState } from 'recoil';
import { audioListState } from '@src/store/atom';

const useMusicQuery = () => {
  const setAudioList = useSetRecoilState(audioListState);
  const { data, isLoading, isError } = useQuery<AudioTypes[], Error>(['audioList'], getMusic, {
    onSuccess: (data) => {
      setAudioList(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { data, isLoading, isError };
};

export default useMusicQuery;
