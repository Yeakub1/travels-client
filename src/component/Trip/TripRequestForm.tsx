import { useState } from "react";

const TripRequestForm = ({ email, name, handler }: any) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  const toggle = true;
  return (
    <div className="max-w-5xl m-auto">
      <div className="grid gap-10 md:grid-cols-2 my-10">
        <div>
          <h1 className="text-2xl font-semibold text-center mb-5 mt-20">
            Terms and conditions
          </h1>

          <p className="my-2">Welcome to Travel Buddy!</p>
          <p className="my-5">
            Travel Buddy Website Functionality and Terms of Service Travel Buddy
            sounds like a great platform for connecting travelers and managing
            bookings! Here's a breakdown of the functionalities you mentioned
            and a draft for your terms and conditions:
          </p>
          <p className="my-5">
            Functionalities: Travel Listings: Users can add, edit, and delete
            travel listings. This could include details like destination, dates,
            activities, accommodation options, and pricing. Booking Management:
            Users can make bookings for travel experiences listed on the
            platform. This likely involves a secure payment system and
            communication channels between travelers and experience providers.
            User Management: Users can create accounts, manage personal
            information, and potentially connect with other travelers.
          </p>
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-[#09867E] rounded "
            />
            <label htmlFor="default-checkbox" className="ms-2 text-sm">
              I agree to the terms and conditions
            </label>
          </div>
        </div>

        <div>
          <form
            onSubmit={handler}
            className={`w-[90%] mx-auto mt-10 p-7 ${
              toggle && "border-[3px] shadow-lg p-5"
            }  px-4 py-10 rounded-lg `}
          >
            <section className="grid md:grid-cols-2 gap-5">
              <div className="">
                <p className="font-semibold"> Name</p>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered input-md w-full max-w-xs my-3 "
                  name="name"
                  value={name}
                  required
                />
              </div>

              <div>
                <p className="font-semibold"> Email</p>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered input-md w-full max-w-xs my-3 "
                  name="email"
                  value={email}
                  required
                />
              </div>
              <div>
                <p className="font-semibold"> Phone Number</p>
                <input
                  type="text"
                  placeholder="Number"
                  className="input input-bordered input-md w-full max-w-xs my-3 "
                  name="number"
                  required
                />
              </div>

              <div>
                <p className="font-semibold"> Country</p>
                <input
                  type="text"
                  placeholder="country"
                  className="input input-bordered input-md w-full max-w-xs my-3 "
                  name="country"
                  required
                />
              </div>

              <div>
                <p className="font-semibold"> City</p>
                <input
                  type="text"
                  placeholder="city"
                  className="input input-bordered input-md w-full max-w-xs my-3 "
                  name="city"
                  required
                />
              </div>
            </section>

            <section className=" text-center mt-10">
              <button
                disabled={!isChecked}
                className={`w-1/2 ${!isChecked && " opacity-[0.5]"}
                 bg-[#09867E] hover:bg-[#09867E] font-semibold text-white btn w-1/2`}
              >
                Submit
              </button>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TripRequestForm;
