import image1 from "/public/image1.png"
import image2 from "/public/image2.png"
import image3 from "/public/image3.png"
import image4 from "/public/image4.png"
import { useSpring, animated } from 'react-spring';


function Section() {
    const headerAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 500 },
    });

    const subtextAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 500, delay: 200 },
    });

    const buttonAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 500, delay: 400 },
    });

    const image1Animation = useSpring({
        from: { opacity: 0, transform: 'translateX(-20px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { duration: 500, delay: 600 },
    });

    const image2Animation = useSpring({
        from: { opacity: 0, transform: 'translateX(-20px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { duration: 500, delay: 800 },
    });

    const image3Animation = useSpring({
        from: { opacity: 0, transform: 'translateX(-20px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { duration: 500, delay: 1000 },
    });

    const image4Animation = useSpring({
        from: { opacity: 0, transform: 'translateX(-20px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { duration: 500, delay: 1200 },
    });
    return (
        <div className="flex flex-col  lg:flex-row lg:justify-between md:text-center lg:text-left  pt-16 px-5 lg:px-14 mt-10 bg-secondary lg:relative ">
            {/* Left Side: Welcome Text, Subtext, Get Started Button */}
            <div className=" max-w-md lg:max-w-4xl my-12">
                <animated.div style={headerAnimation}>

                    <h1 className="text-[40px] leading-[50px] font-bold mb-4 text-primary font-serif">
                        Welcome to MedAssist - Your Personal medication companion
                    </h1>
                </animated.div>
                <animated.div style={subtextAnimation}>

                    <p className="text-[#130303] mb-8 text-[18px] leading-[22.5px] font-inter">
                        Are you ready to take charge of your medication routine?
                    </p>
                </animated.div>
                <animated.div style={buttonAnimation}>

                    <button className="bg-primary text-secondary py-2 px-12 rounded-lg hover:bg-blue-600 text-[16px] leading-[22.4px]">
                        Get Started
                    </button>
                </animated.div>
            </div>

            {/* Right Side: Stacked Images */}
            <div className="flex space-x-11 lg:space-x-6 text-center lg:absolute lg:-bottom-24 lg:right-14">
                <div className="flex flex-col  space-y-6">
                    <animated.div style={image1Animation}>

                        <img
                            src={image1}
                            alt="Image 1"
                            className="h-40 w-40 object-cover rounded"
                        />
                    </animated.div>
                    <animated.div style={image3Animation}>

                        <img
                            src={image3}
                            alt="Image 2"
                            className="h-40 w-40 object-cover rounded"
                        />
                    </animated.div>
                </div>

                <div className="flex flex-col space-y-6">
                    <animated.div style={image2Animation}>

                        <img
                            src={image2}
                            alt="Image 3"
                            className="h-40 w-40 object-cover rounded"
                        />
                    </animated.div>
                    <animated.div style={image4Animation}>
                        <img
                            src={image4}
                            alt="Image 4"
                            className="h-40 w-40 object-cover rounded"
                        />
                    </animated.div>

                </div>
            </div>
        </div>
    );
}

export default Section;
