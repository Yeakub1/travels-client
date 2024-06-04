"use client";

import { useGetTravelBuddyRequestQuery } from "@/Redux/api/TravelBuddyRequestApi/travelBuddyRequestApi";
import Loading from "@/component/Loading/Loading";
import isBlockHelper from "@/helper/BlockHelper/isBlockHelper";

const TravelRequestHistory = () => {
  const { data, isLoading, error }: any = useGetTravelBuddyRequestQuery("", {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <Loading />;
  }
  if (error?.data?.message === "Your id is blocked") {
    isBlockHelper(error?.data?.message);
  }

  return (
    <div className="">
      <div className="flex justify-center p-5 bg-[#09867E] text-white text-2xl font-semibold">
        <h1> All Request History</h1>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center px-10">
          <h3 className="text-xl font-semibold my-4">
            Total booking: {data?.data?.length}
          </h3>
        </div>
        <div className="overflow-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr className="text-lg">
                <th>Destination</th>
                <th>location</th>
                <th>travelType</th>
                <th>StartDate</th>
                <th>EndDate</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {data && data.data.length > 0 ? (
                data?.data.map((travel: any) => (
                  <tr key={travel?.id}>
                    <td>{travel?.trip?.destination}</td>
                    <td>{travel?.trip?.location}</td>
                    <td>{travel?.trip?.travelType}</td>
                    <td>{travel?.trip?.startDate}</td>
                    <td>{travel?.trip?.endDate}</td>
                    <td>{travel?.status}</td>
                  </tr>
                ))
              ) : (
                <p>No traveles Request</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TravelRequestHistory;
