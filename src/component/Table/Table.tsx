import TravelRequestHistoryTableList from "./TravelRequestHistoryTableList";
import UserTableList from "./UserTableList";

const Table = ({
  statusHandler,
  roleHandler,
  data,
  headers,
  condition,
}: any) => {
  console.log(data, "table");
  return (
    <section className="container mx-auto p-6 font-mono">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-100 bg-gray-700 uppercase border-b border-gray-600">
                {headers?.map((a: string, index: number) => (
                  <th key={index} className="px-4 py-3">
                    {a}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Sample data for rows. Replace with your actual data */}
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
