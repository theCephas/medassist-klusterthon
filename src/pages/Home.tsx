import Carousel from "../components/Carousel";
import Header from "../components/Header"
import MidSection from "../components/MidSection"
import Section from "../components/Section"

const Home = () => {
  return (
    <div>
      <Header />
      <Section />
      <div className="mt-40 flex items-center justify-center">
        <MidSection />
      </div>
      <div><Carousel/></div>
    </div>
  );
}

export default Home
