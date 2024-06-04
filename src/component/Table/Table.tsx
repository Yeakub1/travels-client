import UserTableList from "./UserTableList";
import TravelRequestHistoryTableList from "./TravelRequestHistoryTableList";

const Table = ({
  statusHandler,
  roleHandler,
  data,
  headers,
  condition,
}: any) => {
  console.log(data, "table");
  return (
    <section className="">
      <div className="flex justify-center p-5 bg-[#09867E] text-white text-2xl font-semibold">
        <h1> All User and Admin</h1>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center px-10">
          <h3 className="text-xl font-semibold my-4">
            Total Users: {data?.length}
          </h3>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold text-left">
                {headers?.map((a: string, index: number) => (
                  <th key={index} className="px-4 py-3">
                    {a}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.map((item: any) =>
                condition === "userTable" ? (
                  <UserTableList
                    item={item}
                    statusHandler={statusHandler}
                    roleHandler={roleHandler}
                    key={item?.id}
                  />
                ) : condition === "travelRequestHistory" ? (
                  <TravelRequestHistoryTableList item={item} key={item?.id} />
                ) : null
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Table;
