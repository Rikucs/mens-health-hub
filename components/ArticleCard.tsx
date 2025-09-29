
import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="group overflow-hidden rounded-lg bg-gray-900 shadow-lg hover:shadow-red-600/20 transition-all duration-300">
      <div className="overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-5">
        <p className="font-bebas text-base text-red-500 tracking-wider">{article.category}</p>
        <h3 className="font-bold text-xl mt-1 leading-tight text-white group-hover:text-red-500 transition-colors duration-200">
          {article.title}
        </h3>
        <p className="text-sm text-gray-400 mt-2">{article.author}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
