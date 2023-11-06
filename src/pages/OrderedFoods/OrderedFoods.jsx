import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import OrderedFood from "./OrderedFood/OrderedFood";

const OrderedFoods = () => {
  const { user } = useContext(AuthContext);
  const allOrderedData = useLoaderData();
  const [orderedFoods, setOrderedFoods] = useState([]);

  useEffect(() => {
    const filterOrderedData = allOrderedData.filter(data => data.buyerEmail === user.email);
    setOrderedFoods(filterOrderedData);
  },[allOrderedData, user.email])

  return (
    <div>
      <div className="bg-rose-50">
        <Navbar></Navbar>
      </div>
      <div className="w-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {
            orderedFoods.map(item => <OrderedFood key={item._id} item={item}></OrderedFood>)
        }
      </div>
      <div className="bg-rose-50">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default OrderedFoods;
