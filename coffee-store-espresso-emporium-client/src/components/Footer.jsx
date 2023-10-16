import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className=" w-full">
        {/* body  */}
        <div className="bg-[url('/images/more/13.jpg')] text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-center w-[80%] mx-auto gap-20 pt-16 pb-11">
            {/* links */}
            <div className="w-1/2 space-y-5">
              <img
                className="w-14 mx-auto md:ml-0"
                src="/images/more/logo.png"
                alt="Logo"
              />
              <h1 className="text-[#331A15] font-semibold text-4xl">
                Espresso Emporium
              </h1>
              <p>
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
              <div className="flex gap-2 w-fit mx-auto md:ml-0 text-[#331A15] text-3xl">
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
                <FaInstagram></FaInstagram>
                <FaLinkedin></FaLinkedin>
              </div>
              <p className="text-[#331A15] text-3xl font-semibold">
                Get In Touch
              </p>
              <div className="flex text-center mx-auto w-fit md:w-full items-center gap-3 ">
                <FaFacebook></FaFacebook> <p>+88 01533 333 333</p>
              </div>
              <div className="flex text-center mx-auto w-fit md:w-full items-center gap-3 ">
                <FaFacebook></FaFacebook> <p>info@gmail.com</p>
              </div>
              <div className="flex text-center mx-auto w-fit md:w-full items-center gap-3 ">
                <FaFacebook></FaFacebook>
                <p>72, Wall street, King Road, Dhaka</p>
              </div>
            </div>
            {/* Message */}
            <div className="w-1/2">
              <p className="text-[#331A15] text-3xl font-semibold mb-3">
                Connect with Us
              </p>
              <div className="flex flex-col gap-4">
                <input type="text" />
                <input type="text" />
                <textarea
                  placeholder="Messages"
                  name="messages"
                  id="textarea"
                  cols="30"
                  rows="5"
                ></textarea>
                <button className="text-[#331A15] rounded-full px-2 py-1 hover:font-semibold border-2 border-[#331A15] w-fit mx-auto md:mx-0">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="bg-[url('/images/more/24.jpg')] text-center">
          <h2 className="text-4xl py-3 text-white">
            Copyright Espresso Emporium ! All Rights Reserved
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
