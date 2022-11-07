import { useRouter } from 'next/router';
import { removeToken } from '@src/auth/auth';

type LogoutTypes = [() => void];

export const useLogout = (): LogoutTypes => {
  const router = useRouter();
  const logout = () => {
    removeToken();
    router.reload();
  };
  return [logout];
};
