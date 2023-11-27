import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import AddMedication from "../../components/dashboard-comp/AddMedication";

function MedicationMgt() {
  const [medModal, setMedModal] = useState(false);

  return (
    <div className="container px-4 mx-auto mt-8 sm:max-w-[600px] md:max-w-[760px] lg:max-w-[100%] lg:px-14">
      <div className="border-2 border-[#7C7C7C] border-dashed rounded-[10px] h-60 mb-4 p-3">
        <span className="text-[12px] leading-[15px] flex">
          No medication record
        </span>
        <div
          onClick={() => setMedModal(true)}
          className="flex items-center justify-center h-full"
        >
          <span className="flex item-center gap-1 cursor-pointer">
            <BsPlus />{" "}
            <span className="text-[12px] leading-[15px]">Add medications</span>
          </span>
        </div>
      </div>
      {medModal && <AddMedication closeMed={setMedModal} />}
    </div>
  );
}

export default MedicationMgt;
