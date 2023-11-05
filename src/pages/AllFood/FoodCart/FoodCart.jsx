import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FoodCart = ({data}) => {
    const {_id, food_name, food_image, food_category, price, quantity} = data || {};
    return (
        <div className="border rounded p-3">
            <img className="w-[280px] xl:w-[350px] h-[210px] mx-auto" src={food_image} alt="" />
            <h3 className="text-xl font-semibold w-[280px] xl:w-[350px]">{food_name}</h3>
            <h4 className="font-semibold text-lg">Food: {food_category}</h4>
            <p className="font-bold">Price: ${price}</p>
            <p className="font-semibold mb-3">Available: {quantity} {food_category}</p>
            <Link to={`/allFood/${_id}`}><button className="btn btn-sm bg-green-600 hover:bg-green-600 font-bold text-white w-full">Details</button></Link>
        </div>
    );
};

FoodCart.propTypes = {
    data: PropTypes.object
}

export default FoodCart;