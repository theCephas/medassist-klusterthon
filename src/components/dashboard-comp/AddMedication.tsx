import React, { useState, useEffect } from "react";

interface AddMedicationProps {
  closeMed: (value: boolean) => void;
}

const AddMedication: React.FC<AddMedicationProps> = ({ closeMed }) => {
  const [medicineNames, setMedicineNames] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    // Fetch medicine names on component mount
    fetchMedicineNames();
  }, []);

  //
  const fetchMedicineNames = async () => {
    try {
      const response = await fetch(
        "https://medication.onrender.com/api/v1/medication/all"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch medicine names");
      }

      const data = await response.json();
      setMedicineNames(data.name); // Update state with medicine names
    } catch (error) {
      console.error("Error fetching medicine names:", error);
    }
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
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

          {/* Search bar */}
          <input
            type="text"
            placeholder="Search for a medication"
            value={searchTerm}
            onChange={handleSearch}
            className="mt-4 p-2 border rounded-md"
          />

          {/* Display medicine names based on search term */}
          <ul className="mt-4">
            {medicineNames
              .filter((name) =>
                name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((name, index) => (
                <li key={index}>{name}</li>
              ))}
          </ul>
        </div>
      </div>
      <p onClick={() => closeMed(false)}>Cancel</p>
    </section>
  );
};

export default AddMedication;
