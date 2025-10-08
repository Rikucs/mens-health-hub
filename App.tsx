import React, { useState, useCallback, useMemo, useEffect } from 'react';
import MagazineWrapper from './components/Header'; // Repurposed as MagazineWrapper
import CoverPage from './components/FeaturedArticle'; // Repurposed as CoverPage
import ImagePage from './components/ArticleGrid'; // Repurposed as ImagePage
import SingleImagePage from './components/SingleImagePage'; // For full-page images
import VideoPage from './components/VideoPage'; // For video page
import CommentsPage from './components/PlanGenerator'; // Repurposed as CommentsPage
import { COMMENTS, COVER_IMAGE_URL, VIDEO_URL, CONTENT_PAGES_IMAGES, SINGLE_PAGE_IMAGES } from './constants';

const TOTAL_PAGES = 7; // 1 cover + 4 content pages + 1 video page + 1 comments page

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/mens-health-hub/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowInstallPrompt(false);
      }
      setDeferredPrompt(null);
    }
  };

  const handleNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, TOTAL_PAGES));
  }, []);

  const handlePrevPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }, []);

  const pageContent = useMemo(() => {
    switch (currentPage) {
      case 1:
        return <CoverPage imageUrl={COVER_IMAGE_URL} />;
      case 2:
        return <ImagePage images={CONTENT_PAGES_IMAGES[0]} />;
      case 3:
        return <ImagePage images={CONTENT_PAGES_IMAGES[1]} />;
      case 4:
        return <ImagePage images={CONTENT_PAGES_IMAGES[2]} />;
      case 5:
        return <ImagePage images={CONTENT_PAGES_IMAGES[3]} />;
      case 6:
        return null; // Video page handled outside wrapper
      case 7:
        return null; // Comments page handled outside wrapper
      default:
        return null;
    }
  }, [currentPage]);


  return (
    <>
      {showInstallPrompt && (
        <div className="fixed top-4 left-4 right-4 bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-xl shadow-2xl z-50 animate-slideInUp">
          <div className="flex items-center gap-3">
            {/* App icon */}
            <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-sm md:text-base">Install Men's Health Hub</h3>
              <p className="text-xs md:text-sm text-white/90 mt-1">Add to your home screen for the best experience!</p>
            </div>
            
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                onClick={handleInstallClick}
                className="bg-white text-red-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors shadow-md"
              >
                Install
              </button>
              <button
                onClick={() => setShowInstallPrompt(false)}
                className="text-white/80 hover:text-white p-2 transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Video and Comments pages - completely outside the magazine wrapper */}
      {currentPage === 6 ? (
        <VideoPage 
          videoUrl={VIDEO_URL} 
          currentPage={currentPage}
          totalPages={TOTAL_PAGES}
          onNext={handleNextPage}
          onPrev={handlePrevPage}
        />
      ) : currentPage === 7 ? (
        <CommentsPage 
          comments={COMMENTS}
          currentPage={currentPage}
          totalPages={TOTAL_PAGES}
          onNext={handleNextPage}
          onPrev={handlePrevPage}
        />
      ) : (
        <MagazineWrapper
          currentPage={currentPage}
          totalPages={TOTAL_PAGES}
          onNext={handleNextPage}
          onPrev={handlePrevPage}
        >
          <div key={currentPage} className="animate-fade-in w-full h-full">
             {pageContent}
          </div>
        </MagazineWrapper>
      )}
    </>
  );
};

export default App;