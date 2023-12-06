import React, { useEffect, useState } from "react";
import { useAuth } from "../../layout/AuthContext";
type med = {
  name: string;
  id: string;
};
interface AddMedicFormProps {
  closeMedForm: (value: boolean) => void;
  saved: (value: boolean) => void;
  medicine: med | null;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AddMedicForm: React.FC<AddMedicFormProps> = ({
  closeMedForm,
  medicine,
  saved,
}) => {
  const [form, setForm] = useState("");
  const [frequency, setFrequency] = useState("");
  const [duration, setDuration] = useState("");
  useEffect(() => {
    console.log(medicine);
  }, [medicine]);

  const { token } = useAuth();

  const addMedication = async () => {
    const res = await fetch(
      `https://medication.onrender.com/api/v1/medication-details/add/${medicine?.id}`,
      {
        method: "POST",
        headers: {
          accept: "/",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          frequency: frequency,
          form: form,
          duration: duration,
        }),
      }
    );
    console.log(await res.json());
    console.log(token);
  };
  const handleSave = async () => {
    await addMedication();
    saved(true);
    return closeMedForm(false);
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
        </div>
        <div className="border border-[#D9D9D9] rounded-[6px] p-4 m-4 ">
          <div className="border-b-2 border-[#D9D9D9] pb-5 ">
            <p className="text-[#000] font-dmserif text-[18px] font-[400] pb-2 ">
              What form is the medication?
            </p>
            <p className="font-[400] text-[#111] text-[14px] pb-3 ">
              Select the form
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Pills",
                "Injection",
                "Drops",
                "Powder",
                "Inhaler",
                "Others",
              ].map((item, i) => (
                <button
                  key={i + 1}
                  onClick={() => setForm(item)}
                  className={`flex py-[0px] px-[24px] rounded-[100px] gap-[8px] h-[36px] hover:text-[#fff] hover:bg-[#1B4965] items-center justify-center border border-[#1B4965] text-[14px] ${
                    form === item && "text-[#fff] bg-[#1B4965]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="py-5">
            <p className="text-[#000] font-dmserif text-[18px] font-[400] pb-2 ">
              Duration of usage
            </p>
            <p className="font-[400] text-[#111] text-[14px] pb-3 ">
              For how long will you be taking it?
            </p>
            <div className="flex flex-wrap gap-2">
              {["3 days", "5 days", "7 days", "Others"].map((item, i) => (
                <button
                  key={i + 1}
                  onClick={() => setDuration(item)}
                  className={`flex py-[0px] px-[24px] rounded-[100px] gap-[8px] h-[36px] hover:text-[#fff] hover:bg-[#1B4965] items-center justify-center border border-[#1B4965] text-[14px] ${
                    duration === item && "text-[#fff] bg-[#1B4965]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[#000] font-dmserif text-[18px] font-[400] pb-2 ">
              How often do you take it?
            </p>
            <p className="font-[400] text-[#111] text-[14px] pb-3 ">
              What time interval do you use the drug?
            </p>
            <div className="flex flex-wrap gap-2">
              {["Once daily", "Twice daily", "Thrice daily", "Others"].map(
                (item, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setFrequency(item)}
                    className={`flex py-[0px] px-[24px] rounded-[100px] gap-[8px] h-[36px] hover:text-[#fff] hover:bg-[#1B4965] items-center justify-center border border-[#1B4965] text-[14px] ${
                      frequency === item && "text-[#fff] bg-[#1B4965]"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
        <div className="flex float-right">
          <button
            onClick={() => {
              handleSave();
            }}
            className="text-[14px] m-4 font-[500] flex w-[181px] h-[42px] bg-[#1B4965] hover:bg-[#428FBE] text-[#FCFCFC] items-center justify-center rounded-[5px] "
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};
export default AddMedicForm;
