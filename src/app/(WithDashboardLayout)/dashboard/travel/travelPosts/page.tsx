"use client";
import { useDeleteTripMutation, useGetPostedTripQuery } from "@/Redux/api/Trip/tripApi";
import Container from "@/component/Container/Container";
import Loading from "@/component/Loading/Loading";
import TravelPostCard from "@/component/Trip/TravelPostCard";
import isBlockHelper from "@/helper/BlockHelper/isBlockHelper";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "sonner";
import Swal from "sweetalert2";

const TravelPosts = () => {
    const [deleteFunction] = useDeleteTripMutation();
  const { data, isLoading, refetch, error }: any = useGetPostedTripQuery("", {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
  });
 
  if (isLoading) {
    return <Loading />;
  }
  if (error?.data?.message === "Your id is blocked") {
    isBlockHelper(error?.data?.message);
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
                        Edit
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
    // <Container>
    //   {data?.data?.length > 0 ? (
    //     <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 ">
    //       {data?.data?.map((a: any) => (
    //         <TravelPostCard key={a?.id} data={a} refetch={refetch} />
    //       ))}
    //     </div>
    //   ) : (
    //     <p>no data</p>
    //   )}
    // </Container>
  );
};

export default TravelPosts;
