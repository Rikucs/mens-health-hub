import React from 'react';

interface SingleImagePageProps {
  imageUrl: string;
  altText?: string;
}

const SingleImagePage: React.FC<SingleImagePageProps> = ({ 
  imageUrl, 
  altText = "Magazine content page" 
}) => {
  return (
    <section className="w-full h-full bg-black flex items-center justify-center p-2">
      <img
        src={imageUrl}
        alt={altText}
        className="max-w-full max-h-full object-contain"
      />
    </section>
  );
};

export default SingleImagePage;