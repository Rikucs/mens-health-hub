import React from 'react';

interface ImagePageProps {
  images: { img1: string; img2: string };
}

const ImagePage: React.FC<ImagePageProps> = ({ images }) => {
  return (
    <section className="w-full h-full grid grid-rows-2 gap-2 p-2 bg-black">
      <div className="flex items-center justify-center">
        <img
          src={images.img1}
          alt="Magazine content page part 1"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="flex items-center justify-center">
        <img
          src={images.img2}
          alt="Magazine content page part 2"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </section>
  );
};

export default ImagePage;