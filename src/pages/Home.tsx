import Carousel from "../components/Carousel";
import Contact from "../components/Contact";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MidSection from "../components/MidSection";
import Section from "../components/Section";
import WhyMedAssist from "../components/WhyMedAssist";

const Home: React.FC = () => {
  const images = [
    {
      url: "src/assets/slider1.png",
      text: "Effortless Medication Management: Add, edit, or remove medications with ease. Set reminders and personalize instructions effortlessly.",
    },
    {
      url: "src/assets/slider2.png",
      text: "Adherence Tracking: Stay on top of your health journey with our intuitive adherence tracking system. Visualize your progress and celebrate your achievements",
    },
    {
      url: "src/assets/slider3.png",
      text: "Reliable Reminders: Receive timely reminders for your medications and never miss a dose again. Our smart notifications keep you on track",
    },
    {
      url: "src/assets/slider4.png",
      text: "Family Healthcare Simplified: Add your loved ones to your profile, manage their medications, and receive updates. MedAssist ensures coordinated care for the entire family.",
    },
    {
      url: "src/assets/slider5.png",
      text: "Direct Communication with Healthcare Providers: Connect securely with your healthcare provider within the app. Get guidance, ask questions, and stay informed about your health",
    },
    {
      url: "src/assets/slider6.png",
      text: "Educational Resources at Your Fingertips: Access our continually updated educational library to learn more about your medications and empower yourself with knowledge.",
    },
  ];

  return (
    <>
      <Header />
      <Section />
      <MidSection />
      <Carousel images={images} />
      <WhyMedAssist />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
