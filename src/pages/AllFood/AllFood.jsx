import Navbar from "../Shared/Navbar/Navbar";
import AllFoodBanner from "./AllFoodBanner/AllFoodBanner";

const AllFood = () => {
  return (
    <div>
      <div className="bg-rose-50">
        <Navbar></Navbar>
      </div>
      <AllFoodBanner></AllFoodBanner>
      <form className="max-w-[500px] mx-auto my-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here.."
            className="input input-bordered w-full pr-16"
          />
          <button className="btn bg-orange-500 hover:bg-orange-700 text-white absolute top-0 right-0 rounded-l-none">
            Search
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default AllFood;
