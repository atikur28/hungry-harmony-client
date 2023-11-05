const AllFoodBanner = () => {
  return (
    <div
      className="h-[50vh] flex justify-center items-center"
      style={{
        background:
          "url(https://i.ibb.co/tpgD3dq/tim-toomey-STq-HLq-Mne3k-unsplash.jpg), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))",

        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
      }}
    >
      <div>
        <h1 className="text-xl md:text-4xl lg:text-6xl text-center font-bold text-white">
          Here the Foods
        </h1>
        <p className="text-white text-center max-w-[600px] mt-5">
          Indulge in a symphony of flavors at HurngryHarmony. Explore our
          exquisite menu, where diverse ingredients come together to create
          culinary perfection. Enjoy a harmonious dining experience with us!
        </p>
      </div>
    </div>
  );
};

export default AllFoodBanner;
