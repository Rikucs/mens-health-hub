import React, { useState, useCallback, useMemo, useEffect } from 'react';
import MagazineWrapper from './components/Header'; // Repurposed as MagazineWrapper
import CoverPage from './components/FeaturedArticle'; // Repurposed as CoverPage
import ImagePage from './components/ArticleGrid'; // Repurposed as ImagePage
import SingleImagePage from './components/SingleImagePage'; // For full-page images
import CommentsPage from './components/PlanGenerator'; // Repurposed as CommentsPage
import { COMMENTS, COVER_IMAGE_URL, CONTENT_PAGES_IMAGES, SINGLE_PAGE_IMAGES } from './constants';

const TOTAL_PAGES = 6; // 1 cover + 4 content pages + 1 comments page

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
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
        return <CommentsPage comments={COMMENTS} />;
      default:
        return null;
    }
  }, [currentPage]);


  return (
    <>
      {showInstallPrompt && (
        <div className="fixed top-4 left-4 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg z-50 flex items-center justify-between">
          <div>
            <h3 className="font-bold">Install Men's Health Hub</h3>
            <p className="text-sm">Add to your home screen for easy access!</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleInstallClick}
              className="bg-white text-red-600 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100"
            >
              Install
            </button>
            <button
              onClick={() => setShowInstallPrompt(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
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
    </>
  );
};

export default App;