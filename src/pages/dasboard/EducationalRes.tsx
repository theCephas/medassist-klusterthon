// BlogGrid.tsx
import React from "react";
import { BiMoviePlay } from "react-icons/bi";
import { GoClock } from "react-icons/go";
import { IoNewspaperOutline } from "react-icons/io5";

interface Education {
  id: number;
  title: string;
  image: string;
  type: string;
}

const resources: Education[] = [
  {
    id: 1,
    title: "Health benefits of paracetamol",
    image: "/public/resource1.png",
    type: "video",
  },
  {
    id: 2,
    title: "Health benefits of paracetamol",
    image: "/public/resource2.png",
    type: "article",
  },
  {
    id: 3,
    title: "Health benefits of paracetamol",
    image: "/public/resource3.png",
    type: "article",
  },
  {
    id: 4,
    title: "Health benefits of paracetamol",
    image: "/public/resource4.png",
    type: "article",
  },
  {
    id: 5,
    title: "Health benefits of paracetamol",
    image: "/public/resource5.png",
    type: "video",
  },
  {
    id: 6,
    title: "Health benefits of paracetamol",
    image: "/public/resource6.png",
    type: "video",
  },

  // Add more blog posts as needed
];

const EduGrid: React.FC = () => {
  return (
    <div className="container px-4 mx-auto mt-8 sm:max-w-[600px] md:max-w-[760px] lg:max-w-[100%] lg:px-10">
      <h2 className="text-primary">Educational Resources</h2>

      <div className="flex flex-col gap-5 mt-8 sm:flex-row sm:flex-wrap sm:justify-evenly">
        {resources.map((edu) => (
          <div
            key={edu.id}
            className="p-3 border w-full sm:w-[calc(50%_-_20px)] xl:w-[calc(33%_-_20px)]"
          >
            <img
              src={edu.image}
              className="w-full block mb-3"
              alt="Educational Resource"
            />
            <h2 className="font-inter mb-2">{edu.title}</h2>
            <div className="flex justify-between items-center">
              <span className="flex gap-3 items-center text-[#7C7C7C]">
                {edu.type === "video" ? (
                  <BiMoviePlay />
                ) : (
                  <IoNewspaperOutline />
                )}
                {edu.type}
              </span>

              <span className="flex gap-3 items-center text-[#7C7C7C]">
                <GoClock /> 03:23
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EduGrid;
