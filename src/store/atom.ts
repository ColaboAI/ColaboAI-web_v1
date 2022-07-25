import { atom } from 'recoil';

export const musicPlayState = atom<boolean>({
  key: 'musicPlayState',
  default: false,
});
