import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import AllFoodBanner from "./AllFoodBanner/AllFoodBanner";
import { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import FoodCart from "./FoodCart/FoodCart";

const AllFood = () => {
  const allFoods = useLoaderData();
  const [searchedData, setSearchedData] = useState(allFoods);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.search.value;

    if (search.length) {
      const filteredFood = allFoods.filter((item) =>
        item.food_name.toLowerCase().includes(search.toLowerCase())
      );
      if (filteredFood) {
        console.log(filteredFood);
        setSearchedData(filteredFood);
      }
    } else {
      setSearchedData(allFoods);
    }
    form.reset();
  };

  return (
    <div>
      <div className="bg-rose-50">
        <Navbar></Navbar>
      </div>
      <AllFoodBanner></AllFoodBanner>
      <form onSubmit={handleSearch} className="max-w-[500px] mx-auto my-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here.."
            name="search"
            className="input input-bordered w-full pr-16"
          />
          <button className="btn bg-orange-500 hover:bg-orange-700 text-white absolute top-0 right-0 rounded-l-none">
            Search
          </button>
        </div>
      </form>
      <div className="w-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {
          searchedData.map(data => <FoodCart key={data._id} data={data}></FoodCart>)
        }
      </div>
      <div className="bg-rose-50">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AllFood;
