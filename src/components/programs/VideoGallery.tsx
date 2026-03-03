import { Video } from '../../config/videos';
import VideoCard from './VideoCard';

interface VideoGalleryProps {
  videos: Video[];
}

const VideoGallery = ({ videos }: VideoGalleryProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoGallery;