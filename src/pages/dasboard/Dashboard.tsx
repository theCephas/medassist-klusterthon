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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 h-full">
        {/* Three cards taking 70% of the screen */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-8">
          <div className="bg-secondary h-auto mb-4 rounded-lg p-3 flex  justify-between">
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
          <div
            style={{ border: "dashed", borderBlockColor: "gray" }}
            className=" border-slate-50 rounded-lg h-1/4 mb-4 p-3"
          >
            <span className="text-[12px] leading-[15px] flex">
              Medication management overview
            </span>
            <div className="flex items-center justify-center h-full">
              <span className="flex item-center gap-1 cursor-pointer">
                <BsPlus />{" "}
                <span className="text-[12px] leading-[15px]">
                  Add medications
                </span>
              </span>
            </div>
          </div>
          <div
            style={{ border: "dashed", borderBlockColor: "gray" }}
            className=" h-2/4 rounded-lg p-3"
          >
            <span className="text-[12px] leading-[15px] flex">
              Medication calendar - Reminders
            </span>
            <div className="flex items-center justify-center h-full">
              <span className="flex item-center gap-1 cursor-pointer">
                <BsPlus />{" "}
                <span className="text-[12px] leading-[15px]">
                  Add reminders
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-2  p-4">
          <div
            style={{ border: "dashed", borderBlockColor: "gray" }}
            className=" h-1/2 mb-4 p-3"
          >
            <span className="text-[12px] leading-[15px] flex">
              Adherence tracking
            </span>
            <div className="flex items-center justify-center h-full">
              <span className="flex item-center gap-1 cursor-pointer">
                <BsPlus />{" "}
                <span className="text-[12px] leading-[15px]">
                  Add tracking details
                </span>
              </span>
            </div>
          </div>
          <div
            style={{ border: "dashed", borderBlockColor: "gray" }}
            className=" h-1/2 p-3"
          >
            <span className="text-[12px] leading-[15px] flex">
              Notes and instructions
            </span>
            <div className="flex items-center justify-center h-full">
              <span className="flex item-center gap-1 cursor-pointer">
                <BsPlus />{" "}
                <span className="text-[12px] leading-[15px]">
                  Add notes here
                </span>
              </span>
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
          src={selectedImage || "/public/Avatar.png"} // Provide a default avatar image
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
