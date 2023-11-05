import { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import AllFoodBanner from "./AllFoodBanner/AllFoodBanner";
import { useLoaderData } from "react-router-dom";
import FoodCart from "./FoodCart/FoodCart";

const AllFood = () => {
  const { count } = useLoaderData();

  const [allFoods, setAllFoods] = useState([]);
  const [searchedFoods, setSearchedFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    return parseInt(localStorage.getItem("itemsPerPage")) || 9;
  });

  useEffect(() => {
    fetch(
      `http://localhost:5000/foods?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllFoods(data);
        setSearchedFoods(data);
      });
  }, [currentPage, itemsPerPage]);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.search.value;

    if (search.length) {
      const filteredData = allFoods.filter((data) =>
        data.food_name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchedFoods(filteredData);
    } else {
      setSearchedFoods(allFoods);
    }
    form.reset();
  };

  const handleItemsPerPage = (event) => {
    const val = parseInt(event.target.value);
    setItemsPerPage(val);
    localStorage.setItem("itemsPerPage", val);
    setCurrentPage(0);
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
        {searchedFoods.map((data) => (
          <FoodCart key={data._id} data={data}></FoodCart>
        ))}
      </div>
      <div className="text-center mb-10">
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            key={page}
            className={
              currentPage === page
                ? "btn mr-5 bg-green-600 hover:bg-green-600"
                : "btn mr-5"
            }
          >
            {page}
          </button>
        ))}
        <select className="border" value={itemsPerPage} onChange={handleItemsPerPage}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
      <div className="bg-rose-50">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AllFood;
