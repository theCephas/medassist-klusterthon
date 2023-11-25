import React, { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";

const Dashboard = () => {
  const [greeting, setGreeting] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const getCurrentDate = () => {
      const options: Intl.DateTimeFormatOptions = {
        month: "short", // Short month name (e.g., Nov)
        day: "numeric", // Numeric day of the month (e.g., 22)
        year: "numeric", // Numeric year (e.g., 2023)
      };

      const formattedDate = new Date().toLocaleDateString(undefined, options);
      setCurrentDate(formattedDate);
    };

    getCurrentDate();
    const getCurrentGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting("Good morning");
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting("Good afternoon");
      } else {
        setGreeting("Good evening");
      }
    };

    getCurrentGreeting();

    // Update the greeting every minute to handle cases where the component is mounted for a long time
    const interval = setInterval(() => {
      getCurrentGreeting();
      getCurrentDate();
    }, 60000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container px-4 mx-auto sm:max-w-[600px] md:max-w-[760px] lg:max-w-[100%] lg:px-14">
      <div className="mb-8 h-auto xl:flex xl:justify-center xl:gap-5">
        {/* Three cards taking 70% of the screen */}
        <div className="mt-8 md:flex md:justify-between md:flex-wrap md:gap-4">
          <div className="bg-secondary h-auto mb-4 rounded-lg p-3 flex  justify-between md:w-full lg:mb-0">
            <div className="flex flex-col justify-between">
              <div className="bg-[#fff] rounded-lg w-fit px-3 mb-3">
                <span className="text-[10px] leading-[12px] text-[#130303]">
                  {currentDate}
                </span>
              </div>
              <div>
                <h2 className="text-primary text-[24px] leading-[30px] mb-2">
                  {greeting}, <br /> Chinonye
                </h2>
                <p className="text-[12px] leading-[15px] text-primary">
                  What would you like to do today?
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <PhotoUploader />
            </div>
          </div>
          <div className="border-2 border-[#7C7C7C] border-dashed rounded-[10px] h-[150px] mb-4 p-5 md:w-[48%] md:mb-0 xl:h-[250px]">
            <p className="text-[12px] text-primary leading-[15px] flex font-medium">
              Medication management overview
            </p>
            <div className="flex items-center justify-center h-full">
              <button className="flex item-center gap-1 cursor-pointer">
                <BsPlus />{" "}
                <span className="text-[12px] leading-[15px] font-medium text-primary">
                  Add medications
                </span>
              </button>
            </div>
          </div>
          <div className="border-2 border-[#7C7C7C] border-dashed rounded-[10px] h-[150px] mb-4 p-5 md:w-[48%] md:mb-0 xl:h-[250px]">
            <p className="text-[12px] text-primary leading-[15px] flex font-medium">
              Medication calendar - Reminders
            </p>
            <div className="flex items-center justify-center h-full">
              <button className="flex item-center gap-1 cursor-pointer">
                <BsPlus />{" "}
                <span className="text-[12px] leading-[15px] font-medium text-primary">
                  Add reminders
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="md:flex md:justify-between md:flex-wrap md:gap-4 md:mt-4 md:h-full xl:flex-col xl:w-2/5 xl:justify-start xl:gap-4 xl:mt-8">
          <div className="border-2 border-[#7C7C7C] border-dashed rounded-[10px] h-[150px] mb-4 p-5 md:w-[48%] xl:w-full xl:mb-0 xl:gap-2 xl:h-[195px]">
            <p className="text-[12px] text-primary leading-[15px] flex font-medium">
              Adherence tracking
            </p>
            <div className="flex items-center justify-center h-full">
              <button className="flex item-center gap-1 cursor-pointer">
                <BsPlus />{" "}
                <span className="text-[12px] leading-[15px] font-medium text-primary">
                  Add tracking details
                </span>
              </button>
            </div>
          </div>
          <div className="border-2 border-[#7C7C7C] border-dashed rounded-[10px] h-[150px] mb-4 p-5 md:w-[48%] xl:w-full xl:mb-0 xl:gap-2 xl:h-[195px]">
            <p className="text-[12px] text-primary leading-[15px] flex font-medium">
              Notes and instructions
            </p>
            <div className="flex items-center justify-center h-full">
              <button className="flex item-center gap-1 cursor-pointer">
                <BsPlus />{" "}
                <span className="text-[12px] leading-[15px] font-medium text-primary">
                  Add notes here
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const PhotoUploader = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <img
          src={selectedImage || "/src/assets/Avatar.jpg"} // Provide a default avatar image
          alt="Avatar"
          className="w-24 h-24 rounded-full"
        />
        <label
          htmlFor="uploadInput"
          className="absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </label>
        <input
          id="uploadInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};
