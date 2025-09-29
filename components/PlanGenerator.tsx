import React from 'react';
import { Comment } from '../types';

interface CommentsPageProps {
  comments: Comment[];
}

const CommentsPage: React.FC<CommentsPageProps> = ({ comments }) => {
  return (
    <section className="w-full h-full bg-white text-black p-6 md:p-10 overflow-y-auto no-scrollbar">
      <h2 className="font-bebas text-4xl md:text-5xl tracking-wider text-red-600 border-b-4 border-black pb-2 mb-8">
        Dos teus colegas e amigos
      </h2>
      <div className="space-y-8">
        {comments.map((comment, index) => (
          <div key={index} className="border-l-4 border-gray-200 pl-4">
            <blockquote className="text-gray-700 italic text-lg whitespace-pre-wrap">
              {comment.text}
            </blockquote>
            <cite className="block text-right mt-2 font-bold text-gray-800">- {comment.author}</cite>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentsPage;