import { FaArrowAltCircleLeft } from 'react-icons/fa';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <Link>
        <div className="flex items-center w-fit py-1 px-2 mt-6 gap-3 bg-slate-200 hover:bg-slate-300 rounded lg: mx-auto md:ml-20 ">
          <FaArrowAltCircleLeft></FaArrowAltCircleLeft>
          <p className="text-3xl">Back to home</p>
        </div>
      </Link>
      <div className="w-full">
        <img className="mx-auto" src="/images/404/404.gif" alt="Error_Image" />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
