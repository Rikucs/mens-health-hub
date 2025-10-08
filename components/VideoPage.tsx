import React from 'react';

interface VideoPageProps {
  videoUrl: string;
}

const VideoPage: React.FC<VideoPageProps> = ({ videoUrl }) => {
  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center overflow-hidden">
      {/* Video element */}
      <video
        className="w-full h-full object-contain max-w-full max-h-full"
        controls
        preload="metadata"
        playsInline
        controlsList="nodownload"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Optional overlay for better mobile experience */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default VideoPage;