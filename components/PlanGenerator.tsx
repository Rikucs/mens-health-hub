import React, { useState, useEffect } from 'react';
import { Comment } from '../types';

interface CommentsPageProps {
  comments: Comment[];
}

const CommentsPage: React.FC<CommentsPageProps> = ({ comments }) => {
  const [visibleComments, setVisibleComments] = useState(0);

  useEffect(() => {
    // Animate comments appearing one by one
    const timer = setInterval(() => {
      setVisibleComments(prev => {
        if (prev < comments.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 500);

    return () => clearInterval(timer);
  }, [comments.length]);

  return (
    <section className="w-full h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black flex flex-col relative overflow-hidden">
      {/* Mobile-optimized header */}
      <div className="flex-shrink-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 p-4 md:p-6">
        <h2 className="font-bebas text-2xl md:text-4xl tracking-wider text-red-600 text-center">
          Dos teus colegas e amigos
        </h2>
        <div className="w-16 h-1 bg-red-600 mx-auto mt-2 rounded"></div>
      </div>

      {/* Scrollable comments area */}
      <div 
        className="flex-1 min-h-0 overflow-y-auto px-4 md:px-8 pb-20 pt-4"
        style={{ 
          touchAction: 'pan-y',
          WebkitOverflowScrolling: 'touch',
          userSelect: 'auto',
          WebkitUserSelect: 'auto'
        }}
      >
        <div className="max-w-2xl mx-auto space-y-6">
          {comments.slice(0, visibleComments).map((comment, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-4 md:p-6 border-l-4 border-red-400 transform transition-all duration-500 hover:shadow-lg animate-slideInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                {/* Avatar placeholder */}
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                  {comment.author.split(' ').map(n => n[0]).join('').toUpperCase()}
                </div>
                
                <div className="flex-1 min-w-0">
                  {/* Author name */}
                  <h3 className="font-bold text-gray-800 text-sm md:text-base mb-2">
                    {comment.author}
                  </h3>
                  
                  {/* Comment text */}
                  <blockquote className="text-gray-700 text-sm md:text-base leading-relaxed whitespace-pre-wrap break-words">
                    {comment.text}
                  </blockquote>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="mt-4 flex justify-end">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-red-400 rounded"></div>
              </div>
            </div>
          ))}
          
          {/* Loading indicator for remaining comments */}
          {visibleComments < comments.length && (
            <div className="flex justify-center py-4">
              <div className="animate-pulse flex space-x-1">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default CommentsPage;