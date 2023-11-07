import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import AddedFoodBanner from "./AddedFoodBanner/AddedFoodBanner";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import AddedFoodCart from "./AddedFoodCart/AddedFoodCart";
import { Helmet } from "react-helmet";

const AddedFood = () => {
  const { user } = useContext(AuthContext);
  const addedFoods = useLoaderData();
  const filterAddedFoods = addedFoods.filter(
    (food) => food.providerEmail === user.email
  );

  return (
    <div>
      <Helmet>
        <title>Added Foods</title>
      </Helmet>
      <div className="bg-rose-50">
        <Navbar></Navbar>
      </div>
      <AddedFoodBanner></AddedFoodBanner>
      {filterAddedFoods.length !== 0 ? (
        <div className="w-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          {filterAddedFoods.map((addedFood) => (
            <AddedFoodCart
              key={addedFood._id}
              addedFood={addedFood}
            ></AddedFoodCart>
          ))}
        </div>
      ) : (
        <div className="my-10">
          <p className="text-center font-bold">Not Added food yet</p>
        </div>
      )}
      <div className="bg-rose-50">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AddedFood;
