import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const details = form.details.value;
    const taste = form.taste.value;
    const photo = form.photo.value;
    const coffeeInfo = {
      name,
      supplier,
      category,
      chef,
      details,
      taste,
      photo,
    };
    fetch('http://localhost:5000/coffees', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(coffeeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    //     form.reset();
  };
  return (
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
          {/* From Heading */}
          <div className="w-full pb-8 px-6 lg:w-1/2 lg:px-20 lg:mx-auto">
            <p className="text-3xl text-center">Add New Coffee</p>
            <p className="text-center text-sm font-sans mt-4">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          {/* form */}
          <form onSubmit={handleAddCoffee} className=" font-sans">
            <div className="w-full md:flex md:gap-6 md:px-6 px-8 mb-6">
              <div className="w-full md:w-1/2 space-y-6">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Coffee Name"
                    className="input border w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Supplier
                    </span>
                  </label>
                  <input
                    type="text"
                    name="supplier"
                    placeholder="Enter coffee supplier"
                    className="input w-full "
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Category
                    </span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    placeholder="Enter Coffee Category"
                    className="input  w-full "
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full space-y-6">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Chef
                    </span>
                  </label>
                  <input
                    type="text"
                    name="chef"
                    placeholder="Enter Coffee Chef"
                    className="input  w-full"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Taste
                    </span>
                  </label>
                  <input
                    type="text"
                    name="taste"
                    placeholder="Enter Coffee Taste"
                    className="input  w-full "
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Details
                    </span>
                  </label>
                  <input
                    type="text"
                    name="details"
                    placeholder="Enter Coffee Details"
                    className="input  w-full "
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-8 md:px-5">
              <div className="form-control w-full mb-6">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Photo
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Photo URL"
                  className="input  w-full "
                />
              </div>
              <div className="form-control cursor-pointer  rounded-lg border-2 hover:font-bold hover:border-[#331A15] text-[#331A15] hover:bg-[#c0a480]  bg-[#D2B48C] py-2">
                <input
                  className="cursor-pointer"
                  type="submit"
                  value={'Add Coffee'}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
