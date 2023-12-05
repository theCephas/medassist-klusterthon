import React from "react";

interface AddMedicFormProps {
  closeMedForm: (value: boolean) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AddMedicForm: React.FC<AddMedicFormProps> = ({ closeMedForm }) => {
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
        </div>
        <div>
          <div>
            <p>What form is the medication?</p>
            <p>Select the form</p>
            <div>
              <button>Pills</button>
              <button>Injection</button>
              <button>Drops</button>
              <button>Powder</button>
              <button>Inhaler</button>
              <button>Others</button>
            </div>
          </div>
          <div>
            <p>Duration of usage</p>
            <p>For how long will you be taking it?</p>
            <div>
              <button>3 days</button>
              <button>5 days</button>
              <button>7 days</button>
              <button>Others</button>
            </div>
          </div>
          <div>
            <p>How often do you take it?</p>
            <p>What time interval do you use the drug?</p>
            <div>
              <button>Once daily</button>
              <button>Twice daily</button>
              <button>Thrice daily</button>
              <button>Others</button>
            </div>
          </div>

          <button
            onClick={() => {
              closeMedForm(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddMedicForm;
