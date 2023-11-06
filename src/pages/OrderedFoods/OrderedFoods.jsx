import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const OrderedFoods = () => {
  return (
    <div>
      <div className="bg-rose-50">
        <Navbar></Navbar>
      </div>
      <div className="bg-rose-50">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default OrderedFoods;
