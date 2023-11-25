import { useSpring, animated } from "react-spring";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";

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

  const image2Animation = useSpring({
    from: { opacity: 0, transform: "translateX(-20px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 500, delay: 800 },
  });

  const image3Animation = useSpring({
    from: { opacity: 0, transform: "translateX(-20px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 500, delay: 1000 },
  });

  const image4Animation = useSpring({
    from: { opacity: 0, transform: "translateX(-20px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 500, delay: 1200 },
  });
  return (
    <div className=" sm:text-center lg:text-left  pt-16 pb-16 bg-home lg:pb-0 lg:relative ">
      <div className="container mx-auto px-4 sm:max-w-[600px] md:max-w-[760px] lg:pt-16 lg:max-w-[1140px] flex flex-col  lg:flex-row lg:justify-between">
        {/* Left Side: Welcome Text, Subtext, Get Started Button */}
        <div className="w-full sm:mx-auto md:w-3/4 lg:mx-0 lg:w-3/5  my-12 lg:my-0 lg:mb-5">
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
        </div>

        {/* Right Side: Stacked Images */}
        <div className="w-[300px] mx-auto grid grid-cols-2 gap-3 lg:w-auto lg:gap-8 lg:absolute lg:right-20">
          <animated.div style={image1Animation}>
            <img
              src={Image1}
              alt="Image 1"
              className="lg:h-40 lg:w-40 object-cover rounded"
            />
          </animated.div>
          <animated.div style={image2Animation}>
            <img
              src={Image2}
              alt="Image 3"
              className="lg:h-40 lg:w-40 object-cover rounded"
            />
          </animated.div>
          <animated.div style={image3Animation}>
            <img
              src={Image3}
              alt="Image 2"
              className="lg:h-40 lg:w-40 object-cover rounded"
            />
          </animated.div>
          <animated.div style={image4Animation}>
            <img
              src={Image4}
              alt="Image 4"
              className="lg:h-40 lg:w-40 object-cover rounded"
            />
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default Section;
