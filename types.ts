// FIX: Added missing Article type to resolve compilation error in ArticleCard.tsx
export interface Article {
  imageUrl: string;
  title: string;
  category: string;
  author: string;
}

export interface Comment {
  author: string;
  text: string;
}
