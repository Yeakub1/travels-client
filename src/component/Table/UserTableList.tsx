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
          className={` cursor-pointer align-middle select-none font-sans font-bold text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
        >
          {item?.userStatus === "Activate" ? "Deactivate" : "Activate"}
        </span>
      </td>

      <td className="px-4 py-3 text-sm border">
        <span
          onClick={(e: any) => roleHandler(e.target.innerText, item?.id)}
          className={` cursor-pointer align-middle select-none font-sans font-bold text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg  hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
        >
          {item?.role === "Admin" ? "User" : "Admin"}
        </span>
      </td>
    </tr>
  );
};

export default UserTableList;
