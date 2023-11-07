import PropTypes from "prop-types";

const OrderedFood = ({ item, handleDelete }) => {
  const { _id, food_image, food_name, price, buyerName, date } = item || {};
  return (
    <div className="border rounded p-3">
      <img
        className="w-[280px] xl:w-[350px] h-[210px] mx-auto"
        src={food_image}
        alt=""
      />
      <h3 className="text-xl font-semibold w-[280px] xl:w-[350px]">
        {food_name}
      </h3>
      <h4 className="font-semibold text-lg">Food Owner: {buyerName}</h4>
      <p className="font-bold">Price: ${price}</p>
      <p className="font-semibold mb-3">Ordered: {date}</p>
      <button onClick={() => handleDelete(_id)} className="btn btn-sm bg-red-600 hover:bg-red-600 text-white font-bold w-full rounded">Delete</button>
    </div>
  );
};

OrderedFood.propTypes = {
  item: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default OrderedFood;
