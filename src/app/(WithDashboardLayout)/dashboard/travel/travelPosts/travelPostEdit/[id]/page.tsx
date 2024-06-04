"use client";
import {
  useGetSingleTripQuery,
  useUpdateTripMutation,
} from "@/Redux/api/Trip/tripApi";
import { removeFromLocalStorage } from "@/Services/Action/auth.services";
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
  };
  return (
    <div>
      <div>
        <div>
          <div className="flex justify-center p-5 bg-[#09867E] text-white text-2xl font-semibold">
            <h1>Edit Trip</h1>
          </div>
          <form
            onSubmit={handler}
            className={`w-[90%] mx-auto  mt-10  ${
              toggle && "border-[3px] shadow-lg"
            }  p-4 rounded-lg `} >
            <section className=" grid md:grid-cols-2 gap-5">
              <div className="flex justify-center items-center gap-4">
                <p> Destination</p>
                <input
                  type="text"
                  placeholder="destination"
                  className="input input-bordered input-md w-full max-w-xs my-3"
                  onChange={(date) => setDestination(date.target.value)}
                  value={destination}
                />
              </div>

              <div className="flex justify-center items-center gap-4">
                <p> Start date</p>
                <input
                  type="date"
                  className="input input-bordered input-md w-full max-w-xs my-3"
                  required
                  onChange={(date) => setStartDate(date.target.value)}
                  value={startDate}
                />
              </div>
              <div className="flex justify-center items-center gap-4">
                <p> End date</p>
                <input
                  type="date"
                  className="input input-bordered input-md w-full max-w-xs my-3"
                  onChange={(date) => setEndDate(date.target.value)}
                  value={endDate}
                />
              </div>

              <div className="flex justify-center items-center gap-4">
                <p> Travel type</p>
                <input
                  type="text"
                  className="input input-bordered input-md w-full max-w-xs my-3"
                  onChange={(date) => setTravelType(date.target.value)}
                  value={travelType}
                />
              </div>

              <div className="flex justify-center items-center gap-4">
                <p> Location</p>
                <input
                  type="text"
                  placeholder="location"
                  className="input input-bordered input-md w-full max-w-xs my-3"
                  onChange={(date) => setLocation(date.target.value)}
                  value={location}
                />
              </div>
              <div className="flex justify-center items-center gap-4">
                <p> Itinerary</p>
                <input
                  placeholder="itinerary"
                  className="input input-bordered input-md w-full max-w-xs my-3"
                  onChange={(date) => setItinerary(date.target.value)}
                  value={itinerary}
                />
              </div>

              <div className="flex justify-center items-center gap-4">
                <p> Description</p>
                <input
                  placeholder=" description"
                  className="input input-bordered input-md w-full max-w-xs my-3"
                  onChange={(date) => setDescription(date.target.value)}
                  value={description}
                />
              </div>
            </section>

            <section className=" text-center mt-10">
              <button className="w-1/2 btn bg-[#09867E] hover:bg-[#09867E] mx-auto font-semibold text-white ">
                Submit
              </button>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TravelPostEdit;
