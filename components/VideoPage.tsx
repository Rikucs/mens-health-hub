import React from 'react';

interface VideoPageProps {
  videoUrl: string;
}

const VideoPage: React.FC<VideoPageProps> = ({ videoUrl }) => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="video-page min-h-screen bg-black flex flex-col">
      {/* Header with back button */}
      <div className="bg-black/80 backdrop-blur-sm border-b border-gray-700 p-4 z-10">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleBack}
            className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
            aria-label="Back to magazine"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="font-bebas text-2xl md:text-4xl tracking-wider text-white flex-1 text-center">
            Video
          </h2>
        </div>
      </div>

      {/* Video container */}
      <div className="flex-1 flex items-center justify-center p-4">
        {/* Video element */}
        <video
          className="w-full h-full max-w-full max-h-full object-contain"
          controls
          autoPlay
          preload="metadata"
          playsInline
          controlsList="nodownload"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPage;