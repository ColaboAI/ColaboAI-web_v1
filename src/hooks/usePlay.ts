import { useRecoilState, useSetRecoilState } from 'recoil';
import { audioState, coverAlbumState, musicArtistState, musicIdState, musicNameState, playState } from 'src/store/atom';
import { AudioTypes } from 'types/music';

type ReturnType = [boolean, number, (music: AudioTypes) => void, () => void, string, string, string];

const usePlay = (): ReturnType => {
  const [play, setPlay] = useRecoilState(playState);
  const [musicId, setMusicId] = useRecoilState(musicIdState);
  const [musicName, setMusicName] = useRecoilState(musicNameState);
  const [musicArtist, setMusicArtist] = useRecoilState(musicArtistState);
  const [coverAlbum, setCoverAlbum] = useRecoilState(coverAlbumState);

  const setAudio = useSetRecoilState(audioState);

  const start = (music: AudioTypes) => {
    setMusicId(music.id);
    setAudio(music.audio_url);
    setMusicName(music.title);
    setMusicArtist(music.artist_name);
    setCoverAlbum(music.cover_image_url);
    setPlay(true);
  };

  const stop = () => {
    setPlay(false);
  };

  return [play, musicId, start, stop, musicName, musicArtist, coverAlbum];
};

export default usePlay;
