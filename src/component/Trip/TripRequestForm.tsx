import { useState } from "react";
import Container from "../Container/Container";

const TripRequestForm = ({ email, name, handler }: any) => {
  const [isChecked, setIsChecked] = useState(false);

  // Handler function to update state when checkbox is clicked
  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  const toggle = true;
  return (
    <Container>
      <div className=" grid gap-10  grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 my-10">
        <div>
          <h1 className=" text-[25px]  font-semibold text-center mb-5 mt-20">
            Terms and conditions
          </h1>

          <p className="text-gray-500 my-10">
            These Terms of Use constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity ("you")
            and Bergside Inc. ("Company", "we", "us", or "our"), concerning your
            access to and use of the https://flowbite.com website as well as any
            other media form, media channel, mobile website or mobile
            application related, linked, or otherwise connected thereto
            (collectively, the "Site"). The Site provides an online marketplace
            for the following goods, products, and/or services: website themes
            and templates (the "Marketplace Offerings"). In order to help make
            the Site a secure environment for the purchase and sale of
            Marketplace Offerings, all users are required to accept and comply
            with these Terms of Use. You agree that by accessing the Site and/or
            the Marketplace Offerings, you have read, understood, and agree to
            be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL
            OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING
            THE SITE AND/OR THE MARKETPLACE OFFERINGS AND YOU MUST DISCONTINUE
            USE IMMEDIATELY. Supplemental terms and conditions or documents that
            may be posted on the Site from time to time are hereby expressly
            incorporated herein by reference. We reserve the right, in our sole
            discretion, to make changes or modifications to these Terms of Use
            at any time and for any reason. We will alert you about any changes
            by updating the "Last updated" date of these Terms of Use, and you
            waive any right to receive specific notice of each such change. It
            is your responsibility to periodically review these Terms of Use to
            stay informed of updates. You will be subject to, and will be deemed
            to have been made aware of and to have accepted, the changes in any
            revised Terms of Use by your continued use of the Site after the
          </p>
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              checked={isChecked} // Bind checked state to the checkbox
              onChange={handleCheckboxChange} // Call handler function on change
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Default checkbox
            </label>
          </div>
        </div>

        <div>
          <form
            onSubmit={handler}
            className={`w-[90%] md:w-[90%] lg:w-[90%] xl:w-[95%] 2xl:w-[90%] mx-auto  mt-10  ${
              toggle && " border-[1px] "
            }  px-4 md:px-2  lg:px-4  xl:px-0  2xl:px-0   py-10  rounded-lg `}
          >
            <section
              className=" grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2  gap-0 md:gap-0 lg:gap-5 xl:gap-10 2xl:gap-10
          
          xl:px-10 2xl:px-10"
            >
              <div className=" text-center my-5">
                <p className=" text-[18px] font-[500] "> Name</p>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500 "
                  name="name"
                  value={name}
                  required
                />
              </div>

              <div className=" text-center my-5">
                <p className=" text-[18px] font-[500] "> Email</p>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500 "
                  name="email"
                  value={email}
                  required
                />
              </div>
              <div className=" text-center my-5">
                <p className=" text-[18px] font-[500] "> Phone Number</p>
                <input
                  type="text"
                  placeholder="Number"
                  className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500 "
                  name="number"
                  required
                />
              </div>

              <div className=" text-center my-5">
                <p className=" text-[18px] font-[500] "> Country</p>
                <input
                  type="text"
                  placeholder="country"
                  className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500 "
                  name="country"
                  required
                />
              </div>

              <div className=" text-center my-5">
                <p className=" text-[18px] font-[500] "> City</p>
                <input
                  type="text"
                  placeholder="city"
                  className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500 "
                  name="city"
                  required
                />
              </div>
            </section>

            <section className=" text-center mt-10">
              <button
                disabled={!isChecked}
                className={`w-1/2 block ${
                  !isChecked && " opacity-[0.5]"
                } mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2`}
              >
                Submit
              </button>
            </section>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default TripRequestForm;
