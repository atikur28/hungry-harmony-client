import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="carousel h-[80vh] w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/JvrN3rx/dolores-preciado-7a-Ad6mk-NE-unsplash.jpg"
          className="w-full"
        />
        <div className="absolute flex h-full w-full justify-center items-center text-center bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)]">
          <div className="">
            <h1 className="text-3xl md:text-5xl text-white font-bold">
              Discover Culinary Excellence
            </h1>
            <p className="lg:w-[610px] mx-auto text-white md:font-semibold mt-3 mb-5 lg:mt-5">
              Indulge in the perfect symphony of flavors, where every dish is a
              masterpiece. At Hungry Harmony, we bring you an exquisite dining
              experience that celebrates the art of food.
            </p>
            <div>
              <Link to="/menus">
                <button className="text-white bg-red-700 py-1 px-5 rounded font-semibold lg:font-bold">
                  Explore Our Menus
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 bottom-0 left-5 right-5">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/0csy5TP/saile-ilyas-Siwrp-Bnx-Dww-unsplash.jpg"
          className="w-full"
        />
        <div className="absolute flex h-full w-full justify-center items-center text-center bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)]">
          <div className="">
            <h1 className="text-3xl md:text-5xl text-white font-bold">
              Discover Culinary Excellence
            </h1>
            <p className="lg:w-[500px] mx-auto text-white md:font-semibold mt-3 mb-5 lg:mt-5">
              Indulge in the perfect symphony of flavors, where every dish is a
              masterpiece. At Hungry Harmony, we bring you an exquisite dining
              experience that celebrates the art of food.
            </p>
            <div>
              <Link to="/menus">
                <button className="text-white bg-red-700 py-1 px-5 rounded font-semibold lg:font-bold">
                  Explore Our Menus
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 bottom-0 left-5 right-5">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/tBTvLZd/sam-moghadam-khamseh-wg551-YMfe-Oc-unsplash.jpg"
          className="w-full"
        />
        <div className="absolute flex h-full w-full justify-center items-center text-center bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)]">
          <div className="">
            <h1 className="text-3xl md:text-5xl text-white font-bold">
              Discover Culinary Excellence
            </h1>
            <p className="lg:w-[500px] mx-auto text-white md:font-semibold mt-3 mb-5 lg:mt-5">
              Indulge in the perfect symphony of flavors, where every dish is a
              masterpiece. At Hungry Harmony, we bring you an exquisite dining
              experience that celebrates the art of food.
            </p>
            <div>
              <Link to="/menus">
                <button className="text-white bg-red-700 py-1 px-5 rounded font-semibold lg:font-bold">
                  Explore Our Menus
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 bottom-0 left-5 right-5">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/VQGMgD7/sam-moghadam-khamseh-Zx-RHv6epg-MQ-unsplash.jpg"
          className="w-full"
        />
        <div className="absolute flex h-full w-full justify-center items-center text-center bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)]">
          <div className="">
            <h1 className="text-3xl md:text-5xl text-white font-bold">
              Discover Culinary Excellence
            </h1>
            <p className="lg:w-[500px] mx-auto text-white md:font-semibold mt-3 mb-5 lg:mt-5">
              Indulge in the perfect symphony of flavors, where every dish is a
              masterpiece. At Hungry Harmony, we bring you an exquisite dining
              experience that celebrates the art of food.
            </p>
            <div>
              <Link to="/menus">
                <button className="text-white bg-red-700 py-1 px-5 rounded font-semibold lg:font-bold">
                  Explore Our Menus
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 bottom-0 left-5 right-5">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
