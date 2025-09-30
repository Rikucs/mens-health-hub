import React from 'react';
import { Comment } from '../types';

interface CommentsPageProps {
  comments: Comment[];
}

const CommentsPage: React.FC<CommentsPageProps> = ({ comments }) => {
  // Remove the animation state - show all comments immediately
  
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black relative">
      {/* Mobile-optimized header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-200 p-3 md:p-6">
        <h2 className="font-bebas text-xl md:text-4xl tracking-wider text-red-600 text-center">
          Dos teus colegas e amigos
        </h2>
        <div className="w-12 h-0.5 md:w-16 md:h-1 bg-red-600 mx-auto mt-1 md:mt-2 rounded"></div>
      </div>

      {/* Scrollable comments area */}
      <div 
        className="min-h-screen overflow-y-scroll overflow-x-hidden px-3 md:px-8 pb-32"
        style={{ 
          paddingTop: '80px', // Space for header
          height: '100vh', // Full viewport height
          touchAction: 'pan-y',
          WebkitOverflowScrolling: 'touch',
          userSelect: 'text',
          WebkitUserSelect: 'text'
        }}
      >
        <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
          {comments.map((comment, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg md:rounded-xl shadow-md p-3 md:p-6 border-l-4 border-red-400 transform transition-all duration-500 hover:shadow-lg animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }} // Faster animation
            >
              <div className="flex items-start gap-3 md:gap-4">
                {/* Avatar placeholder */}
                <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-base">
                  {comment.author.split(' ').map(n => n[0]).join('').toUpperCase()}
                </div>
                
                <div className="flex-1 min-w-0">
                  {/* Author name */}
                  <h3 className="font-bold text-gray-800 text-xs md:text-base mb-1 md:mb-2">
                    {comment.author}
                  </h3>
                  
                  {/* Comment text */}
                  <blockquote className="text-gray-700 text-xs md:text-base leading-relaxed whitespace-pre-wrap break-words">
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
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default CommentsPage;