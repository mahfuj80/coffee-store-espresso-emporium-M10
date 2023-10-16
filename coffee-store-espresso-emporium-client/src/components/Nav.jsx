import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="flex justify-center items-center bg-[url('/images/more/15.jpg')] bg-cover bg-no-repeat h-fit py-2 md:py-0 md:h-20 ">
      <div className="container  flex flex-col md:flex-row items-center justify-between md:mr-4">
        <Link to={'/'}>
          <div className="flex">
            <img className="w-10" src="/images/more/logo.png" alt="Logo" />
            <h1 className="text-4xl text-white">Espresso Emporium</h1>
          </div>
        </Link>
        {/* buttons */}
        <div className="text-white flex gap-3">
          <button className="bg-gray-500 px-3 py-1 rounded hover:bg-gray-600">
            Login
          </button>
          <button className="bg-gray-500 px-3 py-1 rounded hover:bg-gray-600">
            SignUp
          </button>
          <button className="bg-gray-500 px-3 py-1 rounded hover:bg-gray-600">
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
