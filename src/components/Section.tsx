import { useSpring, animated } from "react-spring";
import { CiHeart } from "react-icons/ci";
import HeroImg from "../assets/hero-img.png";
import Arrow from "../assets/arrow.png";

function Section() {
  const headerAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 500 },
  });

  const subtextAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 500, delay: 200 },
  });

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 500, delay: 400 },
  });

  const image1Animation = useSpring({
    from: { opacity: 0, transform: "translateX(-20px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 500, delay: 600 },
  });

  return (
    <div className=" sm:text-center lg:text-left  pt-16 pb-16 bg-home lg:pb-0 lg:relative ">
      <div className="container mx-auto px-4 sm:max-w-[600px] md:max-w-[760px] lg:pt-16 lg:max-w-[1140px] flex flex-col  lg:flex-row lg:justify-between">
        {/* Left Side: Welcome Text, Subtext, Get Started Button */}
        <div className="w-full relative sm:mx-auto md:w-3/4 lg:mx-0 lg:w-3/5  my-12 lg:my-0 lg:mb-5">
          <animated.div style={headerAnimation}>
            <h1 className="text-2xl sm:text-[30px] mb-4 text-primary leading-[125%]">
              Welcome to MedAssist - Your Personal
              <br className="hidden lg:block" /> medication companion
            </h1>
          </animated.div>
          <animated.div style={subtextAnimation}>
            <p className="text-[#130303] mb-8 text-base leading-[22.5px] font-inter lg:w-[70%]">
              Are you ready to take control of your medication routine? Take
              control of your health with MedAssist – because managing your
              medications should be as seamless as your well-being deserves
            </p>
          </animated.div>
          <animated.div style={buttonAnimation}>
            <button className="bg-primary text-home py-2 px-12 rounded-lg text-[16px] leading-[22.4px]">
              Get Started
            </button>
          </animated.div>
          <img
            src={Arrow}
            className="hidden lg:inline-block absolute right-10 top-10 scale-75"
            alt="Arrow"
          />
        </div>

        {/* Right Side: Stacked Images */}
        <div className="w-[300px] mx-auto grid grid-cols-1 gap-3 lg:w-[35%] lg:gap-8 lg:absolute lg:right-20">
          <span className="hidden lg:inline-flex items-center absolute bottom-[100px] -left-16 z-20 rounded-[30px] border border-[#62B6CB] gap-3 bg-white px-2 py-2">
            <span className="bg-[#62B6CB] p-2 rounded-full">
              <CiHeart className="fill-white" />
            </span>
            <p className="text-primary text-sm pr-2">Health care</p>
          </span>
          <animated.div style={image1Animation}>
            <img
              src={HeroImg}
              alt="Hero Image"
              className="w-full object-cover rounded"
            />
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default Section;
