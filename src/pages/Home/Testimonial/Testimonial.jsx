const Testimonial = () => {
  return (
    <div className="lg:relative lg:h-[110vh] 2xl:h-[75vh] mb-10">
      <div
        className="h-[50vh] my-10 flex justify-center items-center"
        style={{
          background:
            "url(https://i.ibb.co/3pLKhYZ/Screenshot-1.jpg), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))",

          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
      >
        <div>
          <h5 className="font-semibold md:text-xl text-white text-center">
            TESTIMONIAL
          </h5>
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center mt-5">
            What They Say
          </h1>
        </div>
      </div>
      <div className="lg:absolute grid grid-cols-1 md:grid-cols-3 gap-5 mx-2 md:mx-10 lg:top-60 2xl:top-80">
        <div className="flex flex-col bg-orange-900 text-white text-center py-5 px-4 rounded-lg">
          <img
            className="w-14 h-14 rounded-full border-4 border-orange-950 object-cover mx-auto"
            src="https://i.ibb.co/RD2ynMR/erik-lucatero-d2-MSDuj-Jl2g-unsplash.jpg"
            alt=""
          />
          <p className="font-semibold mt-4 grow mb-3">
            I recently had the pleasure of dining at HungryHarmony, and it
            exceeded all my expectations. The food was a masterpiece of flavors,
            and each dish was a delightful surprise. The ambiance was perfect
            for a cozy evening, and the service was impeccable. HungryHarmony is
            a hidden gem for food enthusiasts!
          </p>
          <p className="font-semibold">Kyle Smith</p>
        </div>
        <div className="flex flex-col bg-orange-900 text-white text-center py-5 px-4 rounded-lg">
          <img
            className="w-14 h-14 rounded-full border-4 border-orange-950 object-cover mx-auto"
            src="https://i.ibb.co/7XgV7Ws/stefan-stefancik-QXev-Dflbl8-A-unsplash.jpg"
            alt=""
          />
          <p className="font-semibold mt-4 grow mb-3">
            HungryHarmony is a culinary gem! I can not stop raving about the
            amazing dishes I enjoyed there. The fusion of flavors in every bite
            was simply extraordinary. The restaurant is warmed and welcoming
            atmosphere added to the experience, and the staff made us feel like
            valued guests. I can not wait to return.
          </p>
          <p className="font-semibold">Emily Anderson</p>
        </div>
        <div className="flex flex-col bg-orange-900 text-white text-center py-5 px-4 rounded-lg">
          <img
            className="w-14 h-14 rounded-full border-4 border-orange-950 object-cover mx-auto"
            src="https://i.ibb.co/fx5qVyc/reza-biazar-e-Sjm-ZW97c-H8-unsplash.jpg"
            alt=""
          />
          <p className="font-semibold mt-4 grow mb-3">
            My recent visit to HungryHarmony left me thoroughly impressed. The
            food was a symphony of flavors that danced on my taste buds, and I
            can not stop thinking about it. The cozy ambiance and attentive staff
            created a memorable dining experience. If you are looking for a
            gastronomic adventure, make sure to visit HungryHarmony. It is a
            must-visit!
          </p>
          <p className="font-semibold">Benjamin Mitchell</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
