"use client";

import {
  useDeleteTripMutation,
  useGetTripForAdminQuery,
} from "@/Redux/api/Trip/tripApi";
import Link from "next/link";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Loading from "@/component/Loading/Loading";
import { useGetProfileQuery } from "@/Redux/api/profile/profileApi";
import isBlockHelper from "@/helper/BlockHelper/isBlockHelper";

const ManageTravelPosts = () => {
  const { error }: any = useGetProfileQuery("");
  const [deleteFunction] = useDeleteTripMutation();

  if (error?.data?.message === "Your id is blocked") {
    isBlockHelper(error?.data?.message);
  }
  const { data, isLoading, refetch }: any = useGetTripForAdminQuery("", {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
  });
  if (isLoading) {
    return <Loading />;
  }

  const handleDeleteglass = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteFunction(id).unwrap();
        toast.success(result?.message);
      }
    });
  };

  return (
    <div className="">
      <div className="flex justify-center p-5 bg-[#09867E] text-white text-2xl font-semibold">
        <h1> All Booking tarvel</h1>
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
                <th>Image</th>
                <th>Destination</th>
                <th>StartDate</th>
                <th>EndDate</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data && data.data.length > 0 ? (
                data?.data.map((travel: any) => (
                  <tr key={travel?.id}>
                    <th>
                      <img
                        className="w-12 h-12 rounded-full"
                        src={travel.photos}
                        alt="travel Photo"
                        draggable="false"
                      />
                    </th>
                    <td>{travel?.destination}</td>
                    <td>{travel?.startDate}</td>
                    <td>{travel?.endDate}</td>
                    <td>
                      <Link
                        href={`/dashboard/travel/travelPosts/travelPostEdit/${travel?.id}`}
                        className="bg-[#09867E] hover:bg-[#09867E] btn text-white"
                      >
                        <FaEdit />
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteglass(travel?.id)}
                        className="btn btn-ghost bg-red-600 hover:bg-red-900  text-white"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <p>No traveles available</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageTravelPosts;
