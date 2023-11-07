import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Discover from "./Discover/Discover";
import HomeBanner from "./HomeBanner/HomeBanner";
import Testimonial from "./Testimonial/Testimonial";
import { Helmet } from "react-helmet";
import TopOrderedFoods from "./TopOrderedFoods/TopOrderedFoods";

const Home = () => {
  const totalFoods = useLoaderData();
  const sortedFoodData = [...totalFoods].sort((a, b) => b.ordered - a.ordered);
  return (
    <div>
      <Helmet>
        <title>Home | HungryHarmony</title>
      </Helmet>
      <div className="bg-rose-50">
        <Navbar></Navbar>
      </div>
      <HomeBanner></HomeBanner>
      <div className="my-10">
        <h2 className="text-xl md:text-3xl font-bold text-center">Top Ordered Foods</h2>
        <div className="w-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {sortedFoodData.slice(0, 6).map((sorted) => (
            <TopOrderedFoods key={sorted._id} sorted={sorted}></TopOrderedFoods>
          ))}
        </div>
        <div className="w-max mx-auto mt-5">
          <Link to="/allFood"><button className="btn btn-sm bg-green-600 hover:bg-green-600 font-bold text-white">See All</button></Link>
        </div>
      </div>
      <Discover></Discover>
      <Testimonial></Testimonial>
      <div className="bg-rose-50">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
