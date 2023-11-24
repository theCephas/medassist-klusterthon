const AddDependant = () => {
  return (
    <section className="bg-black bg-opacity-50 flex justify-center items-center h-full w-full fixed top-0 left-0 p-4">
      <div className="bg-white">
        <div className="flex items-center bg-home p-6">
          {/* <PhotoUploader /> */}
        </div>

        <form id="dependant" className="p-6 mt-10">
          <div className="mb-6">
            <label htmlFor="fname" className="mb-2 inline-block">
              First name
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              className="px-4 py-2 w-full border border-font rounded-md focus:border-primary focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="lname" className="mb-2 inline-block">
              Last name
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              className="px-4 py-2 w-full border border-font rounded-md focus:border-primary focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="fname" className="mb-2 inline-block">
              Relationship with dependant
            </label>

            <select
              name="relation"
              id="relation"
              className="px-4 py-2 w-full border border-font rounded-md focus:border-primary focus:outline-none"
            >
              <option value="dep" selected>
                Select your dependant
              </option>
              <option value="husband">Husband</option>
              <option value="wife">Wife</option>
              <option value="doctor">Doctor</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="sibling">Siblings</option>
            </select>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddDependant;
