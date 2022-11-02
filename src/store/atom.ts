import { atom } from 'recoil';
import { AudioTypes } from '../../types/music';

export const audioState = atom<string>({
  key: 'audioState',
  default: '',
});

export const audioListState = atom<AudioTypes[]>({
  key: 'audioListState',
  default: [],
});

export const playState = atom<boolean>({
  key: 'playState',
  default: false,
});

export const volumeState = atom<number>({
  key: 'volumeState',
  default: 50,
});

export const muteState = atom<boolean>({
  key: 'muteState',
  default: false,
});

export const searchWordState = atom<string>({
  key: 'searchWordState',
  default: '',
});

export const musicIdState = atom<number>({
  key: 'musicIdState',
  default: 0,
});

export const musicNameState = atom<string>({
  key: 'musicNameState',
  default: '',
});

export const musicArtistState = atom<string>({
  key: 'musicArtistState',
  default: '',
});

export const coverAlbumState = atom<string>({
  key: 'coverAlbumState',
  default: '',
});

export const heartState = atom<boolean>({
  key: 'heartState',
  default: false,
});

export const starState = atom<boolean>({
  key: 'starState',
  default: false,
});
