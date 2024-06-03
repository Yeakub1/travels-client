"use client";
import {
  useGetSingleTripQuery,
  useUpdateTripMutation,
} from "@/Redux/api/Trip/tripApi";
import { removeFromLocalStorage } from "@/Services/Action/auth.services";
import Loading from "@/component/Loading/Loading";
import isBlockHelper from "@/helper/BlockHelper/isBlockHelper";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const TravelPostEdit = ({ params }: any) => {
  const { id } = params;

  const router = useRouter();
  const toggle = true;
  const [loading, serLoading] = useState(false);
  const { data, isLoading, refetch } = useGetSingleTripQuery(id);
  const [updateFunction]: any = useUpdateTripMutation();

  const [destination, setDestination] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [travelType, setTravelType] = useState("");
  const [location, setLocation] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setDestination(data?.data?.destination || "");
    setEndDate(data?.data?.endDate || "");
    setStartDate(data?.data?.startDate || "");
    setTravelType(data?.data?.travelType || "");
    setLocation(data?.data?.location || "");
    setItinerary(data?.data?.itinerary || "");
    setDescription(data?.data?.description || "");
  }, [data]);

  const handler = async (e: any) => {
    e.preventDefault();
    serLoading(true);
    const info = {
      description,
      endDate,
      startDate,
      travelType,
      location,
      itinerary,
      destination,
    };

    const res = await updateFunction({ id: id, data: info });

    if (res?.data?.success === true) {
      toast.success(res?.data?.message);

      refetch();
      serLoading(false);
    }
    if (res?.data?.success === false) {
      toast.success(res?.data?.message);

      serLoading(false);
    }
    if (res?.error?.data?.message === "Your id is blocked") {
      removeFromLocalStorage();

      toast.error("Your id is blocked");

      router.push("/login");
    }

    console.log(res?.error?.data?.message, "res");
  };
  return (
    <div>
      <div>
        <div className=" w-full pb-60  ">
          <h2 className=" text-[30px] font-semibold text-gray-700 text-center my-10 ">
            Create Trip
          </h2>

          <form
            onSubmit={handler}
            className={`w-[90%] md:w-[90%] lg:w-[90%] xl:w-[95%] 2xl:w-[90%] mx-auto  mt-10  ${
              toggle && " border-[1px] "
            }  px-4 md:px-2  lg:px-4  xl:px-0  2xl:px-0   py-10  rounded-lg `}
          >
            <div className=" flex justify-center">
              <img
                className=" w-[200px] h-[200px]  block"
                src={data?.data?.photos[0]}
                alt=""
              />
            </div>
            <section className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-0 md:gap-0 lg:gap-5 xl:gap-0 2xl:gap-0">
              <div className=" text-center my-5">
                <p className=" text-[18px] font-[500] "> Destination</p>
                <input
                  type="text"
                  placeholder="destination"
                  className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500 "
                  onChange={(date) => setDestination(date.target.value)}
                  value={destination}
                />
              </div>

              <div className=" text-center my-5">
                <p className=" text-[18px] font-[500] "> Start date</p>
                <input
                  type="date"
                  className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500"
                  required
                  onChange={(date) => setStartDate(date.target.value)}
                  value={startDate}
                />
              </div>
              <div className=" text-center my-5">
                <p className=" text-[18px] font-[500] "> End date</p>
                <input
                  type="date"
                  className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500"
                  onChange={(date) => setEndDate(date.target.value)}
                  value={endDate}
                />
              </div>

              <div className=" text-center my-5">
                <p className=" text-[18px] font-[500] "> Travel type</p>
                <input
                  type="text"
                  className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500"
                  onChange={(date) => setTravelType(date.target.value)}
                  value={travelType}
                />
              </div>

              <div className=" text-center my-5">
                <p className=" text-[18px] font-[500] "> Location</p>
                <input
                  type="text"
                  placeholder="location"
                  className="input input-bordered input-md w-full max-w-xs my-3 text-gray-500 "
                  onChange={(date) => setLocation(date.target.value)}
                  value={location}
                />
              </div>
              <div className=" text-center my-5">
                <p className=" text-[18px] font-[500] "> Itinerary</p>
                <textarea
                  placeholder="itinerary"
                  className="input input-bordered input-md w-full h-[100px] max-w-xs my-3 text-gray-500 "
                  onChange={(date) => setItinerary(date.target.value)}
                  value={itinerary}
                />
              </div>

              <div className=" text-center my-5">
                <p className=" text-[18px] font-[500] "> Description</p>
                <textarea
                  placeholder=" description"
                  className="input input-bordered input-md w-full h-[100px] max-w-xs my-3 text-gray-500 "
                  onChange={(date) => setDescription(date.target.value)}
                  value={description}
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
      </div>
    </div>
  );
};

export default TravelPostEdit;
