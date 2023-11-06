const AddFoodBanner = () => {
  return (
    <div
      className="h-[40vh] flex justify-center items-center"
      style={{
        background:
          "url(https://i.ibb.co/3pLKhYZ/Screenshot-1.jpg), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))",

        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
      }}
    >
      <div>
        <h1 className="text-xl md:text-4xl lg:text-6xl text-center font-bold text-white">
          Add Your Food
        </h1>
      </div>
    </div>
  );
};

export default AddFoodBanner;
