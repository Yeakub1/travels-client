"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import isBlockHelper from "@/helper/BlockHelper/isBlockHelper";
import { useChangePasswordMutation } from "@/Redux/api/Auth/authApi";
import { removeFromLocalStorage } from "@/Services/Action/auth.services";

const ChangePassword = () => {
  const [changePasswordFunction] = useChangePasswordMutation();
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const oldPassword = e?.target?.oldPassword?.value;
    const newPassword = e?.target?.newPassword?.value;
    const confirmPassword = e?.target?.confirmPassword?.value;

    if (newPassword !== confirmPassword) {
      return toast.success(" New password and Confirm password not matching");
    }

    try {
      const data = await changePasswordFunction({
        oldPassword,
        newPassword,
      }).unwrap();

      if (data?.success === true) {
        toast.success(data.message);
        removeFromLocalStorage();
        router.refresh();
      }
      if (data?.success === false) {
        toast.success(data.message);
      }
      if (data?.error?.data?.message === "Your id is blocked") {
        isBlockHelper(data?.error?.data?.message);
      }
    } catch (error: any) {
      toast.success(error?.data?.message);
    }
  };

  return (
    <div className="antialiased bg-slate-200 broder-[3px] h-screen flex items-center">
      <div className=" w-1/3 mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 className="text-2xl font-medium text-center">
          Change password
        </h1>

        <form onSubmit={handleSubmit} className="my-10  ">
          <div className="flex flex-col space-y-5">
            <label htmlFor="email">
              <p className="font-medium  pb-2">
                Current password
              </p>
              <input
                name="oldPassword"
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3"
                placeholder="Enter old password"
                required
              />
            </label>
            <label htmlFor="email">
              <p className="font-medium  pb-2">New Password</p>
              <input
                name="newPassword"
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3"
                placeholder="Enter new password"
                required
              />
            </label>

            <label htmlFor="email">
              <p className="font-medium  pb-2">
                Confirm Password
              </p>
              <input
                name="confirmPassword"
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3"
                placeholder="Enter confirm password"
                required
              />
            </label>

            <button
              type="submit"
              className="w-full font-medium text-white bg-[#09867E] hover:bg-[#09867E] btn items-center justify-center"
            >
              <span>Confirm</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
