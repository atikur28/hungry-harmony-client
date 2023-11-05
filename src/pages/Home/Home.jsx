import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Discover from "./Discover/Discover";
import HomeBanner from "./HomeBanner/HomeBanner";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <div className="bg-rose-50">
        <Navbar></Navbar>
      </div>
      <HomeBanner></HomeBanner>
      <Discover></Discover>
      <Testimonial></Testimonial>
      <div className="bg-rose-50">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
