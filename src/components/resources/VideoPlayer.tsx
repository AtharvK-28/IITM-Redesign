import { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  youtubeId: string;
  title: string;
}

const VideoPlayer = ({ youtubeId, title }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;

  if (!isPlaying) {
    return (
      <div 
        className="aspect-video rounded-lg overflow-hidden shadow-lg relative group cursor-pointer"
        onClick={() => setIsPlaying(true)}
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
  }

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