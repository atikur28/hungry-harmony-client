import { useContext } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import AddFoodBanner from "./AddFoodBanner/AddFoodBanner";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const handleAddFood = (event) => {
    event.preventDefault();
    const form = event.target;
    const food_name = form.food_name.value;
    const food_category = form.food_category.value;
    const quantity = form.quantity.value;
    const provider = form.provider.value;
    const price = form.price.value;
    const food_image = form.food_image.value;
    const description = form.description.value;
    const providerEmail = user.email;
    const newFood = {
      food_name,
      food_image,
      food_category,
      price,
      providerEmail,
      quantity,
      ordered: 0,
      provider,
      description,
    };
    fetch("http://localhost:5000/foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Good job!", "Product added successfully!", "success");
          form.reset();
        }
      });
  };
  return (
    <div>
      <div className="bg-rose-50">
        <Navbar></Navbar>
      </div>
      <AddFoodBanner></AddFoodBanner>
      <form
        onSubmit={handleAddFood}
        className="px-2 py-10 md:px-5 my-5 bg-pink-50"
      >
        <div className="flex flex-col md:flex-row justify-center gap-4 w-11/12 mx-auto">
          <div className="md:w-2/5">
            <h3 className="font-bold mb-1">Food Name:</h3>
            <input
              className="py-1 px-2 rounded w-full"
              placeholder="Food's name"
              type="text"
              name="food_name"
            />
          </div>
          <div className="md:w-2/5">
            <h3 className="font-bold mb-1">Food Category:</h3>
            <input
              className="py-1 px-2 rounded w-full"
              placeholder="Food's category"
              type="text"
              name="food_category"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 w-11/12 mx-auto mt-4">
          <div className="md:w-2/5">
            <h3 className="font-bold mb-1">Quantity:</h3>
            <input
              className="py-1 px-2 rounded w-full"
              placeholder="Food's quantity"
              type="text"
              name="quantity"
            />
          </div>
          <div className="md:w-2/5">
            <h3 className="font-bold mb-1">Add By:</h3>
            <input
              className="py-1 px-2 rounded w-full"
              placeholder="Food's provider"
              type="text"
              name="provider"
              defaultValue={user.displayName}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 w-11/12 mx-auto mt-4">
          <div className="md:w-2/5">
            <h3 className="font-bold mb-1">Price:</h3>
            <input
              className="py-1 px-2 rounded w-full"
              placeholder="Food's price"
              type="text"
              name="price"
            />
          </div>
          <div className="md:w-2/5">
            <h3 className="font-bold mb-1">Image link:</h3>
            <input
              className="py-1 px-2 rounded w-full"
              placeholder="Food's image link"
              type="text"
              name="food_image"
            />
          </div>
        </div>
        <div className="w-11/12 md:w-3/4 mx-auto mt-4">
          <div className="w-full">
            <h3 className="font-bold mb-1">Description:</h3>
            <input
              className="py-1 px-2 rounded w-full"
              placeholder="Food's description"
              type="text"
              name="description"
            />
          </div>
        </div>
        <div className="w-max mx-auto mt-10">
          <button className="py-1 px-10 bg-green-700 text-white font-bold md:text-lg rounded hover:bg-green-800">
            Add Food
          </button>
        </div>
      </form>
      <div className="bg-rose-50">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AddFood;
