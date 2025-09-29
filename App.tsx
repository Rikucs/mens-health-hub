import React, { useState, useCallback, useMemo } from 'react';
import MagazineWrapper from './components/Header'; // Repurposed as MagazineWrapper
import CoverPage from './components/FeaturedArticle'; // Repurposed as CoverPage
import ImagePage from './components/ArticleGrid'; // Repurposed as ImagePage
import SingleImagePage from './components/SingleImagePage'; // For full-page images
import CommentsPage from './components/PlanGenerator'; // Repurposed as CommentsPage
import { COMMENTS, COVER_IMAGE_URL, CONTENT_PAGES_IMAGES, SINGLE_PAGE_IMAGES } from './constants';

const TOTAL_PAGES = 6; // 1 cover + 4 content pages + 1 comments page

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

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
  );
};

export default App;