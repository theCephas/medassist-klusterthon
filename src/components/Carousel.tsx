import React from "react";
//@ts-expect-error this is a type check
import { useSpringCarousel } from "react-spring-carousel";

interface CarouselItemProps {
  color: string;
  children: React.ReactNode;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ color, children }) => {
  return (
    <div className={`bg-${color} p-4 rounded-md`}>
      <p className="text-white">{children}</p>
    </div>
  );
};

const mockedItems = [
  { id: 1, title: "Item 1", color: "blue" },
  { id: 2, title: "Item 2", color: "green" },
  { id: 3, title: "Item 3", color: "red" },
];

const Carousel = () => {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      initialActiveItem: 2,
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
      })),
    });

  return (
    <div className="bg-secondary mt-12 p-4">
      <h1 className="text-3xl font-serif text-center text-primary mb-4">
        Our Key Features
      </h1>
      <div className="">
        <button
          className="bg-primary text-white px-4 py-2 rounded-md mr-2"
          onClick={slideToPrevItem}
        >
          Prev
        </button>
        <div className="flex-grow">{carouselFragment}</div>
        <button
          className="bg-primary text-white px-4 py-2 rounded-md ml-2"
          onClick={slideToNextItem}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
