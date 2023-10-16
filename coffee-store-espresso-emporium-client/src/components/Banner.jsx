const Banner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* main banner  */}
      <div className="bg-[url('/images/more/3.png')] flex justify-center w-full bg-cover">
        <div className="lg:pl-[50%] text-center md:py-16 py-11 px-11 lg:text-left lg:pr-[10%] lg:py-60 space-y-3">
          <h2 className="text-4xl text-white">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="text-white">
            It is coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="px-2 py-1 rounded-lg hover:bg-[#E3B577] text-white hover:text-[#242222] border-2 border-[#242222]">
            Learn More
          </button>
        </div>
      </div>
      {/* Banner footer */}
      <div className=" bg-[#ECEAE3] py-14  w-full ">
        <div className="lg:w-[90%] m-auto gap-6 flex flex-col flex-wrap  items-center justify-center lg:flex-nowrap md:flex-row px-8">
          <div className="text-center lg:text-left space-y-2 lg:px-9 md:px-4">
            <img
              className="mx-auto lg:m-0"
              src="/images/icons/1.png"
              alt="Banner_Icon"
            />
            <p className="text-3xl text-[#331A15]">Awesome Aroma</p>
            <p className="text-[#1B1A1A]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="text-center lg:text-left space-y-2 lg:px-9 md:px-4">
            <img
              className="mx-auto lg:m-0"
              src="/images/icons/2.png"
              alt="Banner_Icon"
            />
            <p className="text-3xl text-[#331A15]">Awesome Aroma</p>
            <p className="text-[#1B1A1A]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="text-center lg:text-left space-y-2 lg:px-9 md:px-4">
            <img
              className="mx-auto lg:m-0"
              src="/images/icons/3.png"
              alt="Banner_Icon"
            />
            <p className="text-3xl text-[#331A15]">Awesome Aroma</p>
            <p className="text-[#1B1A1A]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="text-center lg:text-left space-y-2 lg:px-9 md:px-4">
            <img
              className="mx-auto lg:m-0"
              src="/images/icons/4.png"
              alt="Banner_Icon"
            />
            <p className="text-3xl text-[#331A15]">Awesome Aroma</p>
            <p className="text-[#1B1A1A]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
