import React from 'react';

interface CoverPageProps {
  imageUrl: string;
}

const CoverPage: React.FC<CoverPageProps> = ({ imageUrl }) => {
  return (
    <section 
      className="w-full h-full bg-black flex items-center justify-center"
      aria-label="Cover page"
    >
      <img
        src={imageUrl}
        alt="Magazine cover"
        className="max-w-full max-h-full object-contain"
      />
    </section>
  );
};

export default CoverPage;