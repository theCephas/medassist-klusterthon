import { BsPlus } from "react-icons/bs";


const AdherenceTrk = () => {
  return (
    <div className="mt-8">
      <div
        style={{ border: "dashed", borderBlockColor: "secondary" }}
        className=" border-secondary h-60  rounded-lg  mb-4 p-3"
      >
        <span className="text-[12px] leading-[15px] flex">
          No adherence record
        </span>
        <div className="flex items-center justify-center h-full">
          <span className="flex item-center gap-1 cursor-pointer">
            <BsPlus />{" "}
            <span className="text-[12px] leading-[15px]">Add medications</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AdherenceTrk