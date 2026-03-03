import type { EmbeddedVideoProps } from './types';

export const EmbeddedVideo = ({ youtubeId, title }: EmbeddedVideoProps) => {
  return (
    <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
};