import Chinonye from "../../assets/chinonye.svg";

interface AddDependantProps {
  closeModal: (value: boolean) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AddDependant: React.FC<AddDependantProps> = ({ closeModal }) => {
  return (
    <section className="z-50 bg-black bg-opacity-50 flex justify-center items-center h-full w-full fixed top-0 left-0 p-4">
      <div className="bg-white scrollbar h-[500px] overflow-x-hidden overflow-scroll rounded-[20px] w-[100%] sm:w-[500px]">
        <div className="relative flex flex-col pt-[20px] pb-[45px] items-center text-center bg-[#CAE9FFBF] p-6 overflow-hidden rounded-[20px]">
          <p className="text-[#111] text-[24px] font-[400] leading-[125%] pb-4 ">
            Add Dependent
          </p>
          <p className="text-[14px] font-[400] leading-[125%] ">
            Manage meds for your family members
          </p>
        </div>
        <img
          className="flex items-center m-auto relative bottom-10 mb-[-20px]"
          src={Chinonye}
          alt="Chinonye Svg"
        />

        <form id="dependant" className="relative flex flex-col px-8">
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="fname"
              className="mb-1 text-[13px] md:text-[16px] leading-[140%] text-[#130303] font-[600]"
            >
              First name
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              className="px-4 py-1 w-full border border-font rounded-md focus:border-primary focus:outline-none"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="lname"
              className="mb-1 text-[13px] md:text-[16px] leading-[140%] text-[#130303] font-[600]"
            >
              Last name
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              className="px-4 py-1 w-full border border-font rounded-md focus:border-primary focus:outline-none"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="fname"
              className="mb-1 text-[13px] md:text-[16px] leading-[140%] text-[#130303] font-[600]"
            >
              Relationship with dependant
            </label>

            <select
              name="relation"
              id="relation"
              className="px-4 text-[13px] md:text-[15px] py-1 w-full border border-font rounded-md focus:border-primary focus:outline-none"
            >
              {/* <option value="dep" selected></option> */}
              <option value="husband" selected>
                Husband
              </option>
              <option value="wife">Wife</option>
              <option value="doctor">Doctor</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="sibling">Sibling</option>
            </select>
          </div>
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="fname"
              className="mb-1 text-[13px] md:text-[16px] leading-[140%] text-[#130303] font-[600]"
            >
              Gender of dependant
            </label>

            <select
              name="relation"
              id="relation"
              className="px-4 text-[13px] md:text-[15px] py-1 w-full border border-font rounded-md focus:border-primary focus:outline-none"
            >
              <option value="Male" selected>
                Male
              </option>
              <option value="Female">Female</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="lname"
              className="mb-1 text-[13px] md:text-[16px] leading-[140%] text-[#130303] font-[600]"
            >
              Age of dependent
            </label>
            <input
              type="number"
              name="Age"
              id="age"
              className="px-4 py-1 w-full border border-font rounded-md focus:border-primary focus:outline-none"
            />
          </div>
        </form>
        <div className="my-5 text-[13px] md:text-[15px] flex justify-center gap-10 sm:gap-[120px] items-center">
          <button
            onClick={() => closeModal(false)}
            className="border border-[#B50000] rounded-[5px] text-[#111] flex items-center justify-center h-[42px] w-[100px] "
          >
            Cancel
          </button>
          <button className="border rounded-[5px] bg-[#1B4965] text-[#fcfcfc] flex items-center justify-center h-[42px] w-[100px] ">
            Done
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddDependant;
