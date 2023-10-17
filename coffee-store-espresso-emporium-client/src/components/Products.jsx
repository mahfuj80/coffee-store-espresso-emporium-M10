import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="container mx-auto my-8 md:my-20">
      <div className="bg-[url('/images/more/1.png')] bg-contain ">
        <p className="text-sm font-light text-center">--- Sip & Savor ---</p>
        <p className="text-4xl text-[#331A15] text-center mb-6">
          Our Popular Products
        </p>
        <div className="w-fit mx-auto mb-7 ">
          <Link to={'/add-coffee'}>
            <button className="btn py-1 px-2 hover:bg-[#E3B577] border-2 border-[#331A15] text-[#331A15]">
              Add Coffee
            </button>
          </Link>
        </div>
        <div>
          <div className="container mx-auto w-fit grid  gap-4 grid-cols-1 md:grid-cols-2 opacity-[.8]">
            <img src="/images/cups/cup1.png" alt="Coffee_Image" />
            <img src="/images/cups/cup2.png" alt="Coffee_Image" />
            <img src="/images/cups/cup3.png" alt="Coffee_Image" />
            <img src="/images/cups/cup4.png" alt="Coffee_Image" />
            <img src="/images/cups/cup5.png" alt="Coffee_Image" />
            <img src="/images/cups/cup6.png" alt="Coffee_Image" />
            <img src="/images/cups/cup7.png" alt="Coffee_Image" />
            <img src="/images/cups/cup8.png" alt="Coffee_Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
