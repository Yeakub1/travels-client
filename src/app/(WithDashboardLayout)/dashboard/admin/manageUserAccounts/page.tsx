"use client";

import {
  useGetAllUsersQuery,
  useUpdateUserStatusMutation,
} from "@/Redux/api/UsersManage/usersManageApi";
import Loading from "@/component/Loading/Loading";
import Table from "@/component/Table/Table";
import isBlockHelper from "@/helper/BlockHelper/isBlockHelper";
import { toast } from "sonner";

const ManageUserAccounts = () => {
  const { data, refetch, isLoading, error }: any = useGetAllUsersQuery("");
  const [updateFunction] = useUpdateUserStatusMutation();

  const headers = [
    "Image",
    "name",
    "email",
    "status",
    "Role",
    "Change Status",
    "Change Role",
  ];

   if (isLoading) {
     return (
       <div className=" h-screen flex justify-center items-center">
         <Loading />
       </div>
     );
   }
  if (error?.data?.message === "Your id is blocked") {
    isBlockHelper(error?.data?.message);
  }
  const roleHandler = async (data: string, id: string) => {
    try {
      const updateData = await updateFunction({
        data: { role: data },
        id,
      }).unwrap();

      if (updateData?.success === true) {
        toast.success(updateData.message);
        refetch();
      }
      if (updateData?.success === false) {
        toast.success(updateData.message);
      }
    } catch (error: any) {
      toast.success(error?.data?.message);
    }
  };
  const statusHandler = async (data: string, id: string) => {
    try {
      const updateData = await updateFunction({
        data: { userStatus: data },
        id,
      }).unwrap();

      if (updateData?.success === true) {
        toast.success(updateData.message);
        refetch();
      }
      if (updateData?.success === false) {
        toast.success(updateData.message);
      }
    } catch (error: any) {
      toast.success(error?.data?.message);
    }
  };

  return (
    <div>
      {data?.data?.length > 0 ? (
        <Table
          data={data?.data}
          roleHandler={roleHandler}
          statusHandler={statusHandler}
          headers={headers}
          condition={"userTable"}
        />
      ) : (
       <p>no data</p>
      )}
    </div>
  );
};

export default ManageUserAccounts;
