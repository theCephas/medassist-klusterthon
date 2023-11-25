import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

import React, { useState } from "react";

interface CarouselProps {
  images: { url: string; text: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-home py-16 pb-20">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <h2 className="text-primary mb-10 text-2xl text-center sm:text-3xl md:text-4xl">
          Our Key Features
        </h2>
        <div className="relative mx-auto md:w-4/5 md:mx-auto">
          <div className="flex relative overflow-hidden rounded-md mb-5 sm:w-4/5 sm:mx-auto">
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-full h-[200px] sm:h-[300px] ${
                  index === currentImageIndex ? "block" : "hidden"
                }`}
              >
                <img
                  src={image.url}
                  alt={`carousel-${index}`}
                  className="w-full h-full"
                />
                <div className="absolute bg-black bg-opacity-70 inset-0 flex items-center justify-center p-8 leading-[125%] sm:px-12">
                  <p className="text-white text-xs text-center sm:text-base">
                    {image.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="w-10 h-10 rounded-full flex justify-center items-center absolute sm:top-1/2 transform sm:-translate-y-1/2 bg-primary border-none cursor-pointer left-0"
            onClick={prevImage}
          >
            <BsArrowLeftShort size={24} className="fill-white cursor-pointer" />
          </button>
          <button
            className="w-10 h-10 rounded-full flex justify-center items-center absolute sm:top-1/2 transform sm:-translate-y-1/2 bg-primary border-none cursor-pointer right-0"
            onClick={nextImage}
          >
            <BsArrowRightShort
              size={24}
              className="fill-white cursor-pointer"
            />
          </button>
          <div className="flex justify-center mt-4 absolute left-0 right-0 sm:static sm:mt-0">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 bg-white border border-[#62B6CB] rounded-full mx-2 cursor-pointer ${
                  index === currentImageIndex &&
                  "bg-[#1B4965_!important] border-[#1B4965_!important]"
                }`}
                onClick={() => goToImage(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
