import React, { useState, useEffect, useCallback } from "react";
import AddMedicForm from "./AddMedicForm";
interface AddMedicationProps {
  closeMed: (value: boolean) => void;
}
type items = {
  name: string;
  _id: string;
};
type med = {
  name: string;
  id: string;
};
const AddMedication: React.FC<AddMedicationProps> = ({ closeMed }) => {
  const [medicineNames, setMedicineNames] = useState<med[]>([]);
  const [saved, setSaved] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredMedicineNames, setFilteredMedicineNames] = useState<med[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [medModal, setMedModal] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState<med | null>(null);
  const fetchMedicineNames = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://medication.onrender.com/api/v1/medication/all"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch medicine names");
      }
      const data = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setMedicineNames(
        data.data.map((med: items) => {
          return { name: med.name, id: med._id };
        })
      );
      setLoading(false);
    } catch (error) {
      console.error("Error fetching medicine names:", error);
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    // Fetch medicine names on component mount
    fetchMedicineNames();
  }, [fetchMedicineNames]);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    console.log(medicineNames);
    // Filter medicine names based on the search term
    const filteredNames = medicineNames.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setFilteredMedicineNames(filteredNames);
  };
  return (
    <section className="bg-black z-50 bg-opacity-50 flex justify-center items-center h-full w-full fixed top-0 left-0 p-4">
      {!saved && (
        <div className="bg-white scrollbar h-[500px] overflow-x-hidden overflow-scroll rounded-[20px] w-[100%] sm:w-[500px]">
          <div className="relative flex flex-col pt-[20px] pb-[45px] items-center text-center bg-[#CAE9FFBF] p-6 overflow-hidden rounded-[20px]">
            <p className="text-[#111] text-[24px] font-[400] leading-[125%] pb-4 ">
              Add Medication
            </p>
            <p className="text-[14px] font-[400] leading-[125%] ">
              Add to your medications
            </p>
          </div>

          <input
            type="text"
            placeholder="Search for a medication"
            value={searchTerm}
            onChange={handleSearch}
            className="outline-none border-[#d2d3d3] flex m-auto justify-center text-[14px] mt-4 p-2 border h-[48px] w-[90%] rounded-md"
          />
          <ul className="mt-4 text-[16px] pt-0 p-10">
            {loading && <li>Loading...</li>}
            {!loading &&
              filteredMedicineNames.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelectedMedicine(item);
                    setMedModal(true);
                  }}
                  className="text-[13px] cursor-pointer border-b border-gray-400 py-2"
                >
                  {item.name}
                </li>
              ))}
          </ul>
          <p
            onClick={() => closeMed(false)}
            className="mb-4 border border-red-500 flex justify-center items-center h-[40px] w-[100px] m-auto rounded-md cursor-pointer"
          >
            Cancel
          </p>
        </div>
      )}
      {medModal && (
        <AddMedicForm
          medicine={selectedMedicine}
          saved={setSaved}
          closeMedForm={setMedModal}
        />
      )}
      {!medModal && saved && (
        <aside className="bg-white scrollbar h-[500px] overflow-x-hidden overflow-scroll rounded-[20px] w-[100%] sm:w-[500px] relative">
          <div className="w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 md:px-8 flex flex-col gap-8 items-center">
            <h3 className="text-neutral-900 text-3xl font-['DM Serif Text'] leading-10">
              New medication added!
            </h3>
            <p className=" text-center text-neutral-900 text-sm font-normal font-['Inter'] leading-6 max-w-[15rem]">
              You can proceed to add a reminder to your medication. Let us help
              you stay on track!
            </p>
            <button
              onClick={() => {
                setSaved(false);
                closeMed(false);
              }}
              className="px-20 py-3.5 text-neutral-50 text-base font-medium font-['Inter'] leading-snug bg-cyan-900 rounded-lg w-full"
            >
              Okay
            </button>
          </div>
        </aside>
      )}
    </section>
  );
};
export default AddMedication;
