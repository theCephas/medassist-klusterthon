import Carousel from "../components/Carousel";
import Contact from "../components/Contact";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MidSection from "../components/MidSection";
import Section from "../components/Section";
import WhyMedAssist from "../components/WhyMedAssist";

const Home = () => {
  return (
    <>
      <Header />
      <Section />
      <MidSection />
      <Carousel />
      <WhyMedAssist />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
