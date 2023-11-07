import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import FoodDetailsBanner from "./FoodDetailsBanner/FoodDetailsBanner";
import { Helmet } from "react-helmet";

const FoodDetails = () => {
  const foodDetails = useLoaderData();
  const { _id, food_image, food_name, food_category, price, description, provider } =
    foodDetails || {};

  return (
    <div>
      <Helmet>
        <title>Food Details</title>
      </Helmet>
      <div className="bg-rose-50">
        <Navbar></Navbar>
      </div>
      <FoodDetailsBanner></FoodDetailsBanner>
      <div className="w-max mx-auto my-10 border rounded p-4">
        <img
          className="w-[280px] md:w-[400px] lg:w-[500px] mx-auto"
          src={food_image}
          alt=""
        />
        <h2 className="text-lg md:text-xl font-bold w-[280px] mt-2">
          {food_name}
        </h2>
        <div className="flex justify-between">
          <h4 className="font-semibold">Food: {food_category}</h4>
          <p className="font-semibold">Price: ${price}</p>
        </div>
        <h4 className="font-semibold">Made By: {provider}</h4>
        <p className="w-[280px] md:w-[400px] lg:w-[500px] text-sm text-gray-500 font-medium my-2">{description}</p>
        <Link to={`/purchaseFood/${_id}`}><button className="btn btn-sm bg-green-600 hover:bg-green-600 text-white font-bold w-full rounded">Order Now</button></Link>
      </div>
      <div className="bg-rose-50">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default FoodDetails;
