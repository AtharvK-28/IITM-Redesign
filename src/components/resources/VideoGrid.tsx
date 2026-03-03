import { HelpVideo } from '../../config/helpVideos';
import { VideoPlayer } from './video';

interface VideoGridProps {
  videos: HelpVideo[];
}

const VideoGrid = ({ videos }: VideoGridProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <div key={video.id}>
          <VideoPlayer 
            youtubeId={video.youtubeId}
            title={video.title}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;