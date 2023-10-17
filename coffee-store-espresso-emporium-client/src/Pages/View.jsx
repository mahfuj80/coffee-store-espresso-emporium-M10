import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const View = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="w-full">
          {/* Back to home page link */}
          <Link to={'/'}>
            <div className="flex items-center w-fit py-1 px-2 mt-6 gap-3 text-[#331A15] hover:bg-[#D2B48C] rounded lg: mx-auto md:ml-20 ">
              <FaArrowAltCircleLeft></FaArrowAltCircleLeft>
              <p className="text-3xl">Back to home</p>
            </div>
          </Link>
          {/* Add coffee form */}
          <div className="py-14 bg-[#F4F3F0] md:mx-[5%] rounded my-12">
            <div className=" flex flex-col md:flex-row justify-center items-center gap-10">
              <figure>
                <img
                  src="https://raw.githubusercontent.com/ProgrammingHero1/coffee-store-espresso-emporium/main/images/1.png"
                  alt="Coffee"
                />
              </figure>
              <div className="">
                <h2 className="card-title text-[#331A15] text-3xl">Niceties</h2>
                <p className="font-sans font-thin">
                  <span className="font-bold">Name:</span> Nescafe
                </p>
                <p className="font-sans font-thin">
                  <span className="font-bold">Chef:</span> Mr. Matin Paul
                </p>
                <p className="font-sans font-thin">
                  <span className="font-bold">Supplier:</span> Cappu Authorizer
                </p>
                <p className="font-sans font-thin">
                  <span className="font-bold">Taste:</span> Sweet and hot
                </p>
                <p className="font-sans font-thin">
                  <span className="font-bold">Category:</span> Americano
                </p>
                <p className="font-sans font-thin">
                  <span className="font-bold">Details:</span> Espresso with hot
                  water
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
