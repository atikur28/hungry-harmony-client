import { useContext } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAddedFood = () => {
  const { user } = useContext(AuthContext);
  const updateData = useLoaderData();
  const { _id } = updateData || {};
  const handleUpdate = (event) => {
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
    const updateFood = {
      food_name,
      food_image,
      food_category,
      price,
      providerEmail,
      quantity,
      provider,
      description,
    };
    fetch(`http://localhost:5000/foods/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Good job!",
            "Food details updated successfully!",
            "success"
          );
        }
      });
  };

  return (
    <div>
      <div className="bg-rose-50">
        <Navbar></Navbar>
      </div>
      <div className="py-10 my-5 bg-pink-50">
        <h1 className="text-3xl font-bold text-center mb-10">
          Update Food Details
        </h1>
        <form onSubmit={handleUpdate} className="px-2 md:px-5">
          <div className="flex flex-col md:flex-row justify-center gap-4 w-11/12 mx-auto">
            <div className="md:w-2/5">
              <h3 className="font-bold mb-1">Food Name:</h3>
              <input
                className="py-1 px-2 rounded w-full"
                placeholder="Food's name"
                type="text"
                name="food_name"
                defaultValue={updateData.food_name}
              />
            </div>
            <div className="md:w-2/5">
              <h3 className="font-bold mb-1">Food Category:</h3>
              <input
                className="py-1 px-2 rounded w-full"
                placeholder="Food's category"
                type="text"
                name="food_category"
                defaultValue={updateData.food_category}
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
                defaultValue={updateData.quantity}
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
                defaultValue={updateData.price}
              />
            </div>
            <div className="md:w-2/5">
              <h3 className="font-bold mb-1">Image link:</h3>
              <input
                className="py-1 px-2 rounded w-full"
                placeholder="Food's image link"
                type="text"
                name="food_image"
                defaultValue={updateData.food_image}
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
                defaultValue={updateData.description}
              />
            </div>
          </div>
          <div className="w-max mx-auto mt-10">
            <button className="py-1 px-10 bg-green-700 text-white font-bold md:text-lg rounded hover:bg-green-800">
              Update Details
            </button>
          </div>
        </form>
      </div>
      <div className="bg-rose-50">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default UpdateAddedFood;
