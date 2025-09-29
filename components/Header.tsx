import React from 'react';

interface MagazineWrapperProps {
  children: React.ReactNode;
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

const MagazineWrapper: React.FC<MagazineWrapperProps> = ({ children, currentPage, totalPages, onNext, onPrev }) => {
  return (
    <div className="relative min-h-screen bg-black md:bg-gray-800 flex flex-col justify-center items-center md:p-4 overflow-hidden">
      <div className="w-full h-full md:h-auto md:w-auto flex flex-row items-center md:gap-8 justify-center">
        {/* Previous Page Button */}
        <button
          onClick={onPrev}
          disabled={currentPage === 1}
          className="absolute md:relative z-10 top-1/2 left-2 md:top-auto md:left-auto transform -translate-y-1/2 md:transform-none text-white bg-black/30 p-2 md:p-3 rounded-full hover:bg-red-600 transition-all duration-300 disabled:opacity-0 disabled:cursor-not-allowed"
          aria-label="Previous Page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <main className="relative w-full h-[100dvh] md:h-[88vh] md:aspect-[3/4] bg-black md:shadow-2xl md:shadow-black/50 flex justify-center items-center overflow-hidden md:rounded-lg">
           {children}
        </main>
        
        {/* Next Page Button */}
        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          className="absolute md:relative z-10 top-1/2 right-2 md:top-auto md:right-auto transform -translate-y-1/2 md:transform-none text-white bg-black/30 p-2 md:p-3 rounded-full hover:bg-red-600 transition-all duration-300 disabled:opacity-0 disabled:cursor-not-allowed"
          aria-label="Next Page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="absolute md:relative bottom-4 md:bottom-auto md:mt-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 text-white font-bebas text-2xl tracking-wider">
        <span className="bg-black/50 md:bg-transparent px-3 py-1 rounded-md md:rounded-none">
            Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
};

export default MagazineWrapper;