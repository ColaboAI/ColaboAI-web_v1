export interface Hashtag {
  id: number;
  name: string;
}

interface AudioTypes {
  id: number;
  title: string;
  artist_name: string;
  audio_url: string;
  cover_image_url: string;
  hashtag: Hashtag[];
}

export type { AudioTypes };
