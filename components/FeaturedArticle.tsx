import React, { useState } from 'react';

interface CoverPageProps {
  imageUrl: string;
}

const CoverPage: React.FC<CoverPageProps> = ({ imageUrl }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section 
      className="w-full h-full bg-black flex items-center justify-center relative overflow-hidden"
      aria-label="Cover page"
    >
      {/* Loading spinner */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
        </div>
      )}

      {/* Welcome text overlay for mobile */}
      <div className="absolute top-4 left-4 right-4 z-20 md:hidden">
        <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 text-center">
          <h1 className="text-white font-bebas text-xl tracking-wider mb-1">
            Men's Health Hub
          </h1>
          <p className="text-red-400 text-sm">
            Farewell Magazine for Diogo
          </p>
        </div>
      </div>

      {!imageError ? (
        <img
          src={imageUrl}
          alt="Magazine cover featuring team photo"
          className={`max-w-full max-h-full object-contain transition-all duration-500 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } touch-pinch-zoom`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          loading="eager"
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-white/60 p-8 max-w-sm text-center">
          <svg className="w-20 h-20 mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
          <h2 className="text-xl font-bebas mb-2">Men's Health Hub</h2>
          <p className="text-sm text-red-400 mb-4">Uma lembrança de despedida</p>
          <p className="text-xs">Cover image is loading...</p>
        </div>
      )}

      {/* Tap to start indicator */}
      {imageLoaded && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 md:hidden animate-bounce">
          <div className="bg-red-600/90 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            Tap to start reading →
          </div>
        </div>
      )}
    </section>
  );
};

export default CoverPage;