export interface VideoPlayerProps {
  youtubeId: string;
  title: string;
}

export interface ThumbnailProps {
  youtubeId: string;
  title: string;
  onPlay: () => void;
}

export interface EmbeddedVideoProps {
  youtubeId: string;
  title: string;
}