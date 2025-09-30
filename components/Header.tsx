import React, { useRef } from 'react';

interface MagazineWrapperProps {
  children: React.ReactNode;
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

const MagazineWrapper: React.FC<MagazineWrapperProps> = ({ children, currentPage, totalPages, onNext, onPrev }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef}
      className={`relative min-h-screen bg-black md:bg-gray-800 flex flex-col justify-center items-center ${
        currentPage === 6 ? 'overflow-auto' : 'overflow-hidden'
      }`}
    >
      <div className="w-full h-full md:h-auto md:w-auto flex flex-row items-center md:gap-8 justify-center md:p-4">
        {/* Desktop Previous Page Button */}
        <button
          onClick={onPrev}
          disabled={currentPage === 1}
          className="hidden md:flex text-white bg-red-600/80 p-3 rounded-full hover:bg-red-600 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg backdrop-blur-sm"
          aria-label="Previous Page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Mobile touch areas for navigation */}
        <div className="absolute inset-0 flex md:hidden z-10">
          {/* Left touch area */}
          <button
            onClick={onPrev}
            disabled={currentPage === 1}
            className="flex-1 flex items-center justify-start pl-4 disabled:opacity-50"
            aria-label="Previous Page"
          >
            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </button>
          
          {/* Right touch area */}
          <button
            onClick={onNext}
            disabled={currentPage === totalPages}
            className="flex-1 flex items-center justify-end pr-4 disabled:opacity-50"
            aria-label="Next Page"
          >
            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        <main className="relative w-full h-screen md:h-[85vh] md:max-w-md md:aspect-[3/4] bg-black md:shadow-2xl md:shadow-black/50 flex justify-center items-center overflow-hidden md:rounded-xl">
           {children}
        </main>
        
        {/* Desktop Next Page Button */}
        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          className="hidden md:flex text-white bg-red-600/80 p-3 rounded-full hover:bg-red-600 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg backdrop-blur-sm"
          aria-label="Next Page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Enhanced page indicator */}
      <div className="absolute bottom-safe bottom-4 md:relative md:bottom-auto md:mt-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 z-20">
        <div className="flex items-center gap-4 bg-black/80 md:bg-transparent backdrop-blur-sm px-4 py-2 rounded-full md:rounded-none">
          {/* Page dots for mobile */}
          <div className="flex gap-2 md:hidden">
            {Array.from({ length: totalPages }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i + 1 === currentPage ? 'bg-red-500 scale-125' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineWrapper;