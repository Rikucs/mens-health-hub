import React, { useState, useEffect } from 'react';

interface ImagePageProps {
  images: { img1: string; img2: string };
}

const ImagePage: React.FC<ImagePageProps> = ({ images }) => {
  const [imageErrors, setImageErrors] = useState<{img1: boolean, img2: boolean}>({
    img1: false,
    img2: false
  });
  const [imagesLoaded, setImagesLoaded] = useState<{img1: boolean, img2: boolean}>({
    img1: false,
    img2: false
  });

  const handleImageError = (imageKey: 'img1' | 'img2') => {
    setImageErrors(prev => ({ ...prev, [imageKey]: true }));
  };

  const handleImageLoad = (imageKey: 'img1' | 'img2') => {
    setImagesLoaded(prev => ({ ...prev, [imageKey]: true }));
  };

  return (
    <section className="w-full h-full bg-black overflow-hidden">
      {/* Mobile: Vertical stack with better spacing */}
      <div className="flex flex-col h-full md:grid md:grid-rows-2 gap-1 md:gap-2 p-1 md:p-2">
        
        {/* First Image */}
        <div className="flex-1 flex items-center justify-center bg-gray-900/20 rounded md:rounded-none relative overflow-hidden">
          {!imagesLoaded.img1 && !imageErrors.img1 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
            </div>
          )}
          
          {!imageErrors.img1 ? (
            <img
              src={images.img1}
              alt="Magazine content page part 1"
              className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
                imagesLoaded.img1 ? 'opacity-100' : 'opacity-0'
              } touch-pinch-zoom`}
              onError={() => handleImageError('img1')}
              onLoad={() => handleImageLoad('img1')}
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-white/60 p-4">
              <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-center">Image unavailable</p>
            </div>
          )}
        </div>

        {/* Second Image */}
        <div className="flex-1 flex items-center justify-center bg-gray-900/20 rounded md:rounded-none relative overflow-hidden">
          {!imagesLoaded.img2 && !imageErrors.img2 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
            </div>
          )}
          
          {!imageErrors.img2 ? (
            <img
              src={images.img2}
              alt="Magazine content page part 2"
              className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
                imagesLoaded.img2 ? 'opacity-100' : 'opacity-0'
              } touch-pinch-zoom`}
              onError={() => handleImageError('img2')}
              onLoad={() => handleImageLoad('img2')}
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-white/60 p-4">
              <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-center">Image unavailable</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImagePage;