import Logo from "../assets/medassist.svg";

function SetReminder() {
  return (
    <section className="w-full h-auto flex flex-col justify-start items-center lg:flex-row lg:h-screen">
      <div className="w-full flex  flex-col justify-center items-center bg-grad bg-no-repeat bg-bottom bg-cover p-5 pb-8 lg:w-2/5 lg:h-full">
        <img
          src={Logo}
          className="w-[170px] mb-8 cursor-pointer lg:absolute lg:top-5 lg:left-20"
          alt="MedAssist Logo"
          onClick={() => {}}
        />

        <div className="w-full max-w-[350px] p-8 bg-white bg-opacity-70 backdrop-blur-lg rounded-lg">
          <h1 className="text-font font-semibold mb-2 text-xl">
            Welcome back to MedAssist
          </h1>
          <p className="text-primary">
            Your all-in-one solution for seamless medication management and
            adherence.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[400px] bg-white flex flex-col justify-start items-center pt-8 pb-8 sm:max-w-[500px] md:max-w-[650px] lg:max-w-[60%] lg:h-full lg:overflow-y-auto">
        <div className="mb-4 w-11/12">
          <h2 className="text-center font-bold text-2xl mb-0">
            How often do you take it?
          </h2>
          <p className="text-center mb-6">Let’s help you set that reminder</p>
        </div>

        <form id="SignUpReminder"></form>
      </div>
    </section>
  );
}

export default SetReminder;
