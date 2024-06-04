const UserTableList = ({ item, statusHandler, roleHandler }: any) => {
  return (
    <tr key={item?.id} >
      <td className="px-4 py-3 text-sm">
        <img
          className=" rounded-full h-[50px] w-[50px]"
          src={item?.photo}
          alt=""
        />
      </td>
      <td className="px-4 py-3">{item?.name}</td>
      <td className="px-4 py-3">{item?.email}</td>
      <td className="px-4 py-3">{item?.userStatus}</td>
      <td className="px-4 py-3">{item?.role}</td>
      <td className="px-4 py-3">
        <span
          onClick={(e: any) => statusHandler(e.target.innerText, item?.id)}
          className="bg-[#09867E] hover:bg-[#09867E] btn text-white"
        >
          {item?.userStatus === "Activate" ? "Deactivate" : "Activate"}
        </span>
      </td>

      <td className="px-4 py-3 text-sm">
        <span
          onClick={(e: any) => roleHandler(e.target.innerText, item?.id)}
          className="bg-[#09867E] hover:bg-[#09867E] btn text-white"
        >
          {item?.role === "Admin" ? "User" : "Admin"}
        </span>
      </td>
    </tr>
  );
};

export default UserTableList;
