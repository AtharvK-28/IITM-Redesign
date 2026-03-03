import { useState } from 'react';
import { Video } from '../../config/videos';
import { Play } from 'lucide-react';

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${video.id}`;

  if (!showVideo) {
    return (
      <div 
        className="aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative group cursor-pointer"
        onClick={() => setShowVideo(true)}
      >
        <img 
          src={thumbnailUrl} 
          alt={`${video.title} (${video.language})`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
          <div className="bg-white/90 rounded-full p-4">
            <Play className="w-8 h-8 text-[#800020]" />
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white font-medium">{video.title}</p>
            <p className="text-white/80 text-sm">{video.language}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <iframe
        src={embedUrl}
        title={`${video.title} (${video.language})`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}

export default VideoCard;