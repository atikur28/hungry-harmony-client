const Discover = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 lg:py-20">
      <div className="px-2 md:px-5">
        <h1 className="text-xl md:text-3xl font-bold">
          Discover The Good Atmosphere Of HungryHarmony
        </h1>
        <p className="text-sm md:text-base text-gray-500 font-semibold mt-5 mb-10">
          At HungryHarmony, we take pride in creating a captivating atmosphere
          that complements the exquisite flavors of our cuisine. Our carefully
          curated ambiance, soothing music, and attention to detail ensure that
          every visit to our restaurant is not just a meal but a memorable
          dining experience. We have designed a space where you can savor your
          food while enjoying a warm and inviting environment, making every
          visit a delightful journey for your senses.
        </p>
        <img
          className="w-4/5 md:ml-8"
          src="https://i.ibb.co/C2NSwx2/piotr-szulawski-DCm-Uhk54-F6-M-unsplash.jpg"
          alt=""
        />
        <p className="font-bold mt-10 mb-2">Good Vibes</p>
        <p className="text-gray-500 font-semibold">
          In total 650m<sup>2</sup> of hand-crafted decor, mix of styles and
          colors.
        </p>
      </div>
      <div className="">
        <div className="w-4/5 mx-auto">
          <img
            src="https://i.ibb.co/cLyzCF9/shawnanggg-nmp-W-Www-VSc-unsplash.jpg"
            alt=""
          />
          <h5 className="text-lg font-bold mt-3">Cozy Place</h5>
          <p className="text-sm md:text-base text-gray-500 font-semibold">
            To make everyone entering the establishment feel at home and find
            their atmosphere.
          </p>
        </div>
        <div className="w-4/5 mx-auto mt-16">
          <img
            src="https://i.ibb.co/cLyzCF9/shawnanggg-nmp-W-Www-VSc-unsplash.jpg"
            alt=""
          />
          <h5 className="text-lg font-bold mt-3">Relax Atmosphere</h5>
          <p className="text-sm md:text-base text-gray-500 font-semibold">
            Take refuge in our exclusive haven of greenery and away from the crowds. Live music and performance every Friday night!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
