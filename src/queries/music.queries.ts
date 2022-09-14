import { useQuery } from '@tanstack/react-query';
import { AudioTypes } from '../../types/music';
import { getMusic } from '@src/api/api';

const useMusicQuery = () => {
  const { data, isLoading, isError } = useQuery<AudioTypes[], Error>(['audioList'], getMusic);
  return { data, isLoading, isError };
};

export default useMusicQuery;
