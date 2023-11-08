import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import OrderedFood from "./OrderedFood/OrderedFood";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const OrderedFoods = () => {
  const { user } = useContext(AuthContext);
  const [orderedFoods, setOrderedFoods] = useState([]);

  const url = `http://localhost:5000/orderedFoods?buyerEmail=${user?.email}`;

  useEffect(() => {
    fetch(url, {credentials: 'include'})
    .then(res => res.json())
    .then(data => setOrderedFoods(data))
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/orderedFoods/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = orderedFoods.filter(
                (order) => order._id !== id
              );
              setOrderedFoods(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Ordered Foods</title>
      </Helmet>
      <div className="bg-rose-50">
        <Navbar></Navbar>
      </div>
      {orderedFoods.length !== 0 ? (
        <div className="w-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          {orderedFoods.map((item) => (
            <OrderedFood
              key={item._id}
              item={item}
              handleDelete={handleDelete}
            ></OrderedFood>
          ))}
        </div>
      ) : (
        <div className="my-10">
          <p className="text-center font-bold">Not ordered yet</p>
        </div>
      )}
      <div className="bg-rose-50">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default OrderedFoods;
