import Frame from "../assets/frame.jpg";
import NavButton from "./NavButton";

function WhyMedAssist() {
  return (
    <section className="bg-home py-16 border-t border-primary border-opacity-50">
      <div className="container xl:max-w-[1140px] mx-auto px-4">
        <h1 className="text-primary text-2xl text-center sm:text-3xl md:text-4xl">
          Why Choose MedAssist?
        </h1>

        <div className="md:grid md:grid-cols-2 md:items-center md:gap-x-7 md:mt-10">
          <div className="mt-8 md:mt-0 md:self-start">
            <p className="lg:text-lg">
              MedAssist is more than an app; it's your partner in health. We
              believe that managing your health should be simple, empowering,
              and personalized.
              <br />
              <br />
              Ready to experience the difference? Join MedAssist today and take
              the first step toward a healthier, more organized life.
            </p>
            <NavButton
              className="border border-primary h-[40px] text-sm lg:py-2 xxs:py-3 px-[30px] rounded-md text-secondary bg-primary hover:bg-secondary hover:text-primary lg:inline-block select-none tracking-wider font-medium whitespace-nowrap"
              text="Get Started"
              path="/sign-up"
            />
          </div>
          <img
            src={Frame}
            className="mt-8 md:mt-0 md:h-full lg:h-auto"
            alt="Why Choose MedAssist"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyMedAssist;
