import React from 'react';
import { Comment } from '../types';

interface CommentsPageProps {
  comments: Comment[];
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

const CommentsPage: React.FC<CommentsPageProps> = ({ comments, currentPage, totalPages, onNext, onPrev }) => {
  return (
    <div className="comments-page min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black">
      {/* Header with navigation */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <button 
            onClick={onPrev}
            disabled={currentPage <= 1}
            className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <h2 className="font-bebas text-2xl md:text-4xl tracking-wider text-red-600 text-center flex-1 mx-4">
            Dos teus colegas e amigos
          </h2>
          
          <button 
            onClick={onNext}
            disabled={currentPage >= totalPages}
            className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Page indicator */}
        <div className="flex justify-center">
          <span className="text-gray-600 text-sm">
            Page {currentPage} of {totalPages}
          </span>
        </div>
        <div className="w-16 h-1 bg-red-600 mx-auto rounded"></div>
      </div>

      {/* Content - just normal flow, no height restrictions */}
      <div className="p-4 space-y-6 pb-32">
        {comments.map((comment, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-md p-4 md:p-6 border-l-4 border-red-400 max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                {comment.author.split(' ').map(n => n[0]).join('').toUpperCase()}
              </div>
              
              <div className="flex-1 min-w-0">
                {/* Author name */}
                <h3 className="font-bold text-gray-800 text-sm md:text-base mb-2 uppercase tracking-wide">
                  {comment.author}
                </h3>
                
                {/* Comment text */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                  {comment.text}
                </p>
              </div>
            </div>
            
            {/* Decorative line */}
            <div className="mt-4 flex justify-end">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-red-400 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsPage;