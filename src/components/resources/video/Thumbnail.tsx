import { Play } from 'lucide-react';
import type { ThumbnailProps } from './types';

export const Thumbnail = ({ youtubeId, title, onPlay }: ThumbnailProps) => {
  const thumbnailUrl = `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <div 
      className="aspect-video rounded-lg overflow-hidden shadow-lg relative group cursor-pointer"
      onClick={onPlay}
    >
      <img 
        src={thumbnailUrl} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
        <div className="bg-white/90 rounded-full p-4">
          <Play className="w-8 h-8 text-[#800020]" />
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white font-medium line-clamp-2">{title}</p>
        </div>
      </div>
    </div>
  );
};