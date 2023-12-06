import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import AddMedication from "../../components/dashboard-comp/AddMedication";
import { useAuth } from "../../layout/AuthContext";
import { AuthProvider } from "../../layout/AuthContext";
import Edit from "../../assets/edit.svg";
import Bin from "../../assets/bin.svg";
type med = {
  frequency: string;
  form: string;
  duration: string;
};
const Med: med[] = [
  {
    frequency: "Twice daily",
    form: "Pills",
    duration: "7 days",
  },
];
function MedicationMgt() {
  const [medModal, setMedModal] = useState(false);
  const { username } = useAuth();
  return (
    <AuthProvider>
      <div className="container px-4 mx-auto mt-8 sm:max-w-[600px] md:max-w-[760px] lg:max-w-[100%] lg:px-14">
        <aside className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-6">
          {Med?.map((item, i) => (
            <div
              key={i + 1}
              className="bg-[#D6F3E3] p-[24px] flex flex-col gap-[16px] items-start text-[#111] text-[18px]"
            >
              {/*  */}
              <div className="flex justify-between w-full">
                <p className="flex gap-4">
                  Medication document{" "}
                  <img src={Edit} alt="Edit icon" className="cursor-pointer" />
                </p>
                <img src={Bin} alt="bin icon" className="cursor-pointer" />
              </div>
              <p>Patient name: {username}</p>
              <p>Medication form: {item.form}</p>
              <p>Dosage: {item.frequency}</p>
              <p>Duration: {item.duration}</p>
            </div>
          ))}
        </aside>
        {/*  */}
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
              <span className="text-[12px] leading-[15px]">
                Add medications
              </span>
            </span>
          </div>
        </div>
        {medModal && <AddMedication closeMed={setMedModal} />}
      </div>
    </AuthProvider>
  );
}
export default MedicationMgt;
