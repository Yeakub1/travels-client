"use client";

import { useCreateTripMutation } from "@/Redux/api/Trip/tripApi";
import { useGetProfileQuery } from "@/Redux/api/profile/profileApi";
import { removeFromLocalStorage } from "@/Services/Action/auth.services";
import Loading from "@/component/Loading/Loading";
import isBlockHelper from "@/helper/BlockHelper/isBlockHelper";
import multipleImageHelper from "@/helper/imageHelper/multipleImageHelper";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const CreateTrip = () => {
  const toggle = true;

  const router = useRouter();
  const { data, isLoading } = useGetProfileQuery("");
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");

  const [loading, serLoading] = useState(false);

  const [photos, setPhotos] = useState([]);

  const [createFunction] = useCreateTripMutation();

  if (isLoading) {
    return (
      <div className="  h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  const handler = async (e) => {
    e.preventDefault();

    serLoading(true);

    if (photos.length === 0) {
      serLoading(false);
      return toast.error("Image is missing");
    }

    const destination = e?.target?.destination?.value;
    const travelType = e?.target?.travelType?.value;
    const location = e?.target?.location?.value;
    const itinerary = e?.target?.itinerary?.value;
    const description = e?.target?.description?.value;

    const images = await multipleImageHelper(photos);

    if (images?.length < 1) {
      serLoading(false);
      return toast.error(
        "Image problem. Image not uploaded please try again later."
      );
    }

    if (!photos) {
      return (
        <div>
          <Loading />
        </div>
      );
    }

    const info = {
      destination,
      travelType,
      location,
      itinerary,
      description,

      photos: images,
      endDate,
      startDate,
    };

    console.log(info, "info");
    const res = await createFunction(info);

    console.log(res?.error?.data?.message, res);

    if (res?.data?.success === true) {
      toast.success(res.data.message);

      serLoading(false);
    }
    if (res?.data?.success === false) {
      toast.success(res.data.message);

      serLoading(false);
    }
    console.log(res);
    if (res?.error?.data?.message === "Your id is blocked") {
      removeFromLocalStorage();

      toast.error("Your id is blocked");

      router.push("/login");
    }
    if (res?.error?.data?.message === "Unauthorized Access") {
      toast.error(res?.error?.data?.message);
      serLoading(false);
    }
  };

  return (
    <div className=" w-full pb-60   ">
      <h2 className=" text-[30px] font-semibold text-gray-700 text-center my-10 ">
        Create Trip
      </h2>

      <form
        onSubmit={handler}
        className={`w-[90%] md:w-[90%] lg:w-[90%] xl:w-[95%] 2xl:w-[90%] mx-auto  mt-10  ${
          toggle && " border-[1px] "
        }  px-4 md:px-2  lg:px-4  xl:px-0  2xl:px-0   py-10  rounded-lg `}
      >
        <section className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-0 md:gap-0 lg:gap-5 xl:gap-0 2xl:gap-0">
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Destination</p>
            <input
              type="text"
              placeholder="destination"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500 "
              name="destination"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Start date</p>
            <input
              type="date"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500"
              required
              onChange={(date) => setStartDate(date.target.value)}
            />
          </div>
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> End date</p>
            <input
              type="date"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500"
              required
              onChange={(date) => setEndDate(date.target.value)}
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Travel type</p>
            <select
              type="text"
              placeholder="travel type"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500"
              name="travelType"
              required
            >
              <option></option>
              <option>Adventure</option>
              <option>Leisure</option>
              <option>Business</option>
            </select>
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Location</p>
            <input
              type="text"
              placeholder="location"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500 "
              name="location"
              required
            />
          </div>
          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Itinerary</p>
            <textarea
              type="text"
              placeholder="itinerary"
              className="input input-bordered input-md w-full h-[100px] max-w-xs my-3 text-gray-500 "
              name="itinerary"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500] "> Description</p>
            <textarea
              type="text"
              placeholder=" description"
              className="input input-bordered input-md w-full h-[100px] max-w-xs my-3 text-gray-500 "
              name="description"
              required
            />
          </div>

          <div className=" text-center my-5">
            <p className=" text-[18px] font-[500]   ">
              {" "}
              Image {photos?.length}
            </p>

            <input
              onChange={(e) => setPhotos(Array.from(e.target.files))}
              type="file"
              className="file-input w-full max-w-xs my-3"
              multiple // Add the "multiple" attribute here
            />
          </div>
        </section>

        <section className=" text-center mt-10">
          {loading ? (
            <Loading />
          ) : (
            <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
              Submit
            </button>
          )}
        </section>
      </form>
    </div>
  );
};

export default CreateTrip;
