import { useState } from 'react';
import { Thumbnail } from './Thumbnail';
import { EmbeddedVideo } from './EmbeddedVideo';
import type { VideoPlayerProps } from './types';

export const VideoPlayer = ({ youtubeId, title }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isPlaying) {
    return (
      <Thumbnail
        youtubeId={youtubeId}
        title={title}
        onPlay={() => setIsPlaying(true)}
      />
    );
  }

  return <EmbeddedVideo youtubeId={youtubeId} title={title} />;
};