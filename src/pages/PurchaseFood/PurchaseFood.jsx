import { useContext } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment/moment";
import { Helmet } from "react-helmet";

const PurchaseFood = () => {
  const { user } = useContext(AuthContext);
  const orderFood = useLoaderData();
  const buyerPerson = user.displayName;
  const buyerGmail = user.email;

  const handlePurchase = (event) => {
    event.preventDefault();
    const form = event.target;
    const food_name = form.food_name.value;
    const food_image = orderFood.food_image;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const date = form.date.value;

    const newOrder = {
      food_name,
      food_image,
      price,
      quantity,
      buyerName,
      buyerEmail,
      date,
    };
    if (orderFood.providerEmail === buyerGmail) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Food provider can't purchase food!",
      });
    } else {
      if (parseInt(orderFood.quantity) === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This Food is not available for now!",
        });
      } else {
        if (parseInt(orderFood.quantity) < parseInt(quantity)) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "We have not enough Food quantity!",
          });
        } else {
          fetch("http://localhost:5000/orderedFoods", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newOrder),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire(
                  "Good job!",
                  "Product added successfully!",
                  "success"
                );
              }
            });
        }
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>Purchase Food</title>
      </Helmet>
      <div className="bg-rose-50">
        <Navbar></Navbar>
      </div>
      <div className="py-10 my-5 bg-pink-50">
        <h1 className="text-3xl font-bold text-center mb-10">
          Purchase the food
        </h1>
        <form onSubmit={handlePurchase} className="px-2 md:px-5">
          <div className="flex flex-col md:flex-row justify-center gap-4 w-11/12 mx-auto">
            <div className="md:w-2/5">
              <h3 className="font-bold mb-1">Food Name:</h3>
              <input
                className="py-1 px-2 rounded w-full"
                placeholder="Food's name"
                type="text"
                name="food_name"
                defaultValue={orderFood.food_name}
              />
            </div>
            <div className="md:w-2/5">
              <h3 className="font-bold mb-1">Buyer Name:</h3>
              <input
                className="py-1 px-2 rounded w-full"
                placeholder="Buyer Name"
                type="text"
                name="buyerName"
                defaultValue={buyerPerson}
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
              <h3 className="font-bold mb-1">Buyer Email:</h3>
              <input
                className="py-1 px-2 rounded w-full"
                placeholder="Buyer email"
                type="email"
                name="buyerEmail"
                defaultValue={buyerGmail}
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
                defaultValue={orderFood.price}
              />
            </div>
            <div className="md:w-2/5">
              <h3 className="font-bold mb-1">Date:</h3>
              <input
                className="py-1 px-2 rounded w-full"
                name="date"
                value={moment().subtract(10, "days").calendar()}
              />
            </div>
          </div>
          <div className="w-max mx-auto mt-10">
            <button className="py-1 px-10 bg-green-700 text-white font-bold md:text-lg rounded hover:bg-green-800">
              Purchase Food
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

export default PurchaseFood;
