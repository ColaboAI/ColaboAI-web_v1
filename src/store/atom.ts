import { atom } from 'recoil';
import { MusicListTypes } from 'types/music';

export const audioState = atom<string>({
  key: 'audioState',
  default: '',
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

export const heartState = atom<boolean>({
  key: 'heartState',
  default: false,
});

export const starState = atom<boolean>({
  key: 'starState',
  default: false,
});

export const musicListState = atom<MusicListTypes[]>({
  key: 'musicListState',
  default: [
    {
      musicId: 1,
      musicUrl: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3',
      musicName: '운이 좋았지(Electronic.ver)',
      musicArtist: '권진아',
    },
    {
      musicId: 2,
      musicUrl: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
      musicName: "Drivin'(feat.래원(Layone), BIG Naughty)(Acoustic.ver)",
      musicArtist: '김승민',
    },
    {
      musicId: 3,
      musicUrl: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3',
      musicName: '여름 밤에 쓴 노래(with MVP)(Prod.BIG Naughty)(Classic.ver)',
      musicArtist: 'BIG Naughty, 릴러말즈(Leellamarz)',
    },
    {
      musicId: 4,
      musicUrl: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3',
      musicName: 'Somebody!(Guitar.ver)',
      musicArtist: '로꼬 및 화사',
    },
    {
      musicId: 5,
      musicUrl: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3',
      musicName: '안았어야해(feat. 퓨처리스틱 스웨버)(Drum.ver)',
      musicArtist: 'JAEHA',
    },
    {
      musicId: 6,
      musicUrl: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3',
      musicName: 'Fix you(Acoustic.ver)',
      musicArtist: '스키니 브라운',
    },
    {
      musicId: 7,
      musicUrl: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3',
      musicName: '오아시스(Electronic.ver)',
      musicArtist: '한요한',
    },
  ],
});
