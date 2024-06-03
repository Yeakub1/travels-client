import React from "react";

const UserTableList = ({ item, statusHandler, roleHandler }: any) => {
  return (
    <tr key={item?.id} className="text-gray-700">
      <td className="px-4 py-3 text-sm border">
        <img
          className=" rounded-full h-[50px] w-[50px]"
          src={item?.photo}
          alt=""
        />
      </td>

      <td className="px-4 py-3 text-sm border">{item?.name}</td>
      <td className="px-4 py-3 text-sm border">{item?.email}</td>
      <td className="px-4 py-3 text-sm border">{item?.userStatus}</td>
      <td className="px-4 py-3 text-sm border">{item?.role}</td>

      <td className="px-4 py-3 text-sm border">
        <span
          onClick={(e: any) => statusHandler(e.target.innerText, item?.id)}
          className='bg-red-500 btn'
        >
          {item?.userStatus === "Activate" ? "Deactivate" : "Activate"}
        </span>
      </td>

      <td className="px-4 py-3 text-sm border">
        <span
          onClick={(e: any) => roleHandler(e.target.innerText, item?.id)}
          className='btn bg-primary'
        >
          {item?.role === "Admin" ? "User" : "Admin"}
        </span>
      </td>
    </tr>
  );
};

export default UserTableList;
