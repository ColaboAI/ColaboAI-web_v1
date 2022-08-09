import { atom } from 'recoil';

export const audioState = atom<string>({
  key: 'audioState',
  default: '',
});

export const playState = atom<boolean>({
  key: 'playState',
  default: false,
});

export const playIdState = atom<number>({
  key: 'playIdState',
  default: 0,
});

export const volumeState = atom<number>({
  key: 'volumeState',
  default: 50,
});

export const muteState = atom<boolean>({
  key: 'muteState',
  default: false,
});
