import Link from "next/link";
import SliderCard from "./SliderCard";
import { useGetProfileQuery } from "@/Redux/api/profile/profileApi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isLoggedIn } from "@/Services/Action/auth.services";

const DetailCard = ({ data }: any) => {
   const router = useRouter();

   useEffect(() => {
     if (!isLoggedIn()) {
       router.push("/login");
     }
   }, [router]);
  const { data: userData } = useGetProfileQuery("");

  const {
    photos,
    description,
    itinerary,
    location,
    startDate,
    endDate,
    id,
    userId,
    travelType,
  } = data?.data || {};

  return (
    <section>
      <div className="flex justify-center items-center rounded-full py-20">
        <div className="card grid md:grid-cols-1 2xl:grid-cols-2 lg:card-side w-[90%] md:w-[70%] lg:w-[90%] xl:w-[70%] 2xl:w-[50%] bg-base-100 shadow-xl border-[3px]">
          <div>
            <figure>
              <SliderCard images={photos} />
            </figure>
          </div>
          <div className="card-body">
            <div className=" space-y-5  py-5">
              <p className="text-gray-500">
                <span className=" font-medium text-black">Travel type:</span>{" "}
                {travelType}{" "}
              </p>
              <p className="text-gray-500">
                <span className=" font-medium text-black">Location:</span>{" "}
                {location}{" "}
              </p>
              <p className="text-gray-500">
                <span className=" font-medium text-black">Start Date:</span>{" "}
                {startDate}{" "}
              </p>
              <p className="text-gray-500">
                <span className=" font-medium text-black">End Date:</span>{" "}
                {endDate}{" "}
              </p>
              <p className="text-gray-500">
                <span className=" font-medium text-black">Itinerary:</span>{" "}
                {itinerary}{" "}
              </p>
              <p className="text-gray-500">
                <span className=" font-medium text-black">Description:</span>{" "}
                {description}{" "}
              </p>
            </div>

            <div className="card-actions justify-end my-2 inline md:inline   ">
              {userData?.data?.id === userId ? (
                <h1 className=" text-red-500">You are not accessible</h1>
              ) : (
                <Link
                  href={`/dashboard/travel/travelRequest/${id}`}
                  className="bg-[#09867E] hover:bg-[#09867E] font-semibold text-white btn w-1/2"
                >
                  Travel Request
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailCard;
