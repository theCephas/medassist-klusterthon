import React, { useState, useEffect } from "react";
import AddMedicForm from "./AddMedicForm";

interface AddMedicationProps {
  closeMed: (value: boolean) => void;
}

const AddMedication: React.FC<AddMedicationProps> = ({ closeMed }) => {
  const [medicineNames, setMedicineNames] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredMedicineNames, setFilteredMedicineNames] = useState<string[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [medModal, setMedModal] = useState(false);

  useEffect(() => {
    // Fetch medicine names on component mount
    fetchMedicineNames();
  }, []);

  const fetchMedicineNames = async () => {
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
      setMedicineNames(data.data.map((med: { name: any }) => med.name));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching medicine names:", error);
      setLoading(false);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    // Filter medicine names based on the search term
    const filteredNames = medicineNames.filter((name) =>
      name.toLowerCase().includes(searchTerm)
    );
    setFilteredMedicineNames(filteredNames);
  };

  return (
    <section className="bg-black z-50 bg-opacity-50 flex justify-center items-center h-full w-full fixed top-0 left-0 p-4">
      <div className="bg-white scrollbar h-[500px] overflow-x-hidden overflow-scroll rounded-[20px] w-[100%] sm:w-[500px]">
        <div className="relative flex flex-col pt-[20px] pb-[45px] items-center text-center bg-[#CAE9FFBF] p-6 overflow-hidden rounded-[20px]">
          <p className="text-[#111] text-[24px] font-[400] leading-[125%] pb-4 ">
            Add Medication
          </p>
          <p className="text-[14px] font-[400] leading-[125%] ">
            Add to your medications
          </p>

          {/* Display filtered medicine names based on search term */}
        </div>
        {/* Search bar */}
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
            filteredMedicineNames.map((name, index) => (
              <li
                key={index}
                onClick={() => setMedModal(true)}
                className="text-[13px] cursor-pointer border-b border-gray-400 py-2"
              >
                {name}
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
      {medModal && <AddMedicForm closeMedForm={setMedModal} />}
    </section>
  );
};

export default AddMedication;
