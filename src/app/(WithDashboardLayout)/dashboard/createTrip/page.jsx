"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Loading from "@/component/Loading/Loading";
import { useCreateTripMutation } from "@/Redux/api/Trip/tripApi";
import { useGetProfileQuery } from "@/Redux/api/profile/profileApi";
import { removeFromLocalStorage } from "@/Services/Action/auth.services";
import multipleImageHelper from "@/helper/imageHelper/multipleImageHelper";

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
    return <Loading />;
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
    <div className="">
      <div className="flex justify-center p-5 bg-[#09867E] text-white text-2xl font-semibold">
        <h1> Create Trip</h1>
      </div>
      <form
        onSubmit={handler}
        className={`w-[90%] mx-auto mt-10  ${
          toggle && " border-[3px] shadow-lg"
        }  px-4 md:px-2  lg:px-4  xl:px-0  2xl:px-0   py-10  rounded-lg `}
      >
        <section className="grid md:grid-cols-2">
          <div className="flex justify-center items-center gap-4">
            <p>Destination</p>
            <input
              type="text"
              placeholder="destination"
              className="input input-bordered input-md w-full max-w-xs my-3 "
              name="destination"
              required
            />
          </div>

          <div className="flex justify-center items-center gap-4">
            <p> Start date</p>
            <input
              type="date"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500"
              required
              onChange={(date) => setStartDate(date.target.value)}
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            <p> End date</p>
            <input
              type="date"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500"
              required
              onChange={(date) => setEndDate(date.target.value)}
            />
          </div>

          <div className="flex justify-center items-center gap-4">
            <p> Travel type</p>
            <select
              type="text"
              placeholder="travel type"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500"
              name="travelType"
              required
            >
              <option>select</option>
              <option>Adventure</option>
              <option>Leisure</option>
              <option>Business</option>
            </select>
          </div>

          <div className="flex justify-center items-center gap-4">
            <p> Location</p>
            <input
              type="text"
              placeholder="location"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500 "
              name="location"
              required
            />
          </div>

          <div className="flex justify-center items-center gap-4">
            <p>Image</p>

            <input
              onChange={(e) => setPhotos(Array.from(e.target.files))}
              type="file"
              className="file-input input-bordered w-full max-w-xs my-3"
              multiple
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            <p> Itinerary</p>
            <input
              type="text"
              placeholder="itinerary"
              className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500 "
              name="itinerary"
              required
            />
          </div>

          <div className="flex justify-center items-center gap-4">
            <p>Description</p>
            <input
              type="text"
              placeholder="description"
              className="input input-bordered input-md w-full  max-w-xs my-3 text-gray-500 "
              name="description"
              required
            />
          </div>
        </section>

        <section className=" text-center mt-10">
          <button className=" bg-[#09867E] hover:bg-[#09867E] font-semibold text-white btn w-1/2">
            Submit
          </button>
        </section>
      </form>
    </div> 
  );
};

export default CreateTrip;
