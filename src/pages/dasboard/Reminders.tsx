import { BsPlus } from "react-icons/bs";

const Reminders = () => {
  return (
    <div className="container px-4 mx-auto mt-8 sm:max-w-[600px] md:max-w-[760px] lg:max-w-[100%] lg:px-14">
      <div className="border-2 border-[#7C7C7C] border-dashed rounded-[10px] h-60 mb-4 p-3">
        <span className="text-[12px] leading-[15px] flex">
          Active Reminders
        </span>
        <div className="flex items-center justify-center h-full">
          <span className="flex item-center gap-1 cursor-pointer">
            <BsPlus />{" "}
            <span className="text-[12px] leading-[15px]">Add reminders</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Reminders;
