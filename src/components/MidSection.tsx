import Frame2 from "../assets/frame2.jpg";

const MidSection = () => {
  return (
    <div className="mt-16 pb-16 lg:mt-36 container mx-auto px-4 sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1140px]">
      <h1 className="text-2xl sm:text-[32px] leading-[40px] font-dmserif text-primary text-center ">
        MedAssist, your all-in-one solution for seamless medication
        <br className="hidden lg:block" /> management and adherence.
      </h1>
      <img src={Frame2} alt="frame" className="mt-12 mx-auto" />
    </div>
  );
};

export default MidSection;
