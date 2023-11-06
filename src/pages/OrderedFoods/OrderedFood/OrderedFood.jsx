import PropTypes from "prop-types";

const OrderedFood = ({ item }) => {
  console.log(item);
  const { food_image, food_name, price, buyerName, date } = item || {};
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
    </div>
  );
};

OrderedFood.propTypes = {
  item: PropTypes.object,
};

export default OrderedFood;
