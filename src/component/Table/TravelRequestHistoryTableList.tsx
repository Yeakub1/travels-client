const TravelRequestHistoryTableList = ({ item }: any) => {
  return (
    <tr key={item?.id}>
      <td className="px-4 py-3 text-sm">{item?.trip?.destination}</td>
      <td className="px-4 py-3 text-sm">{item?.status}</td>
      <td className="px-4 py-3 text-sm">{item?.trip?.startDate}</td>
      <td className="px-4 py-3 text-sm">{item?.trip?.endDate}</td>
      <td className="px-4 py-3 text-sm">{item?.trip?.location}</td>
      <td className="px-4 py-3 text-sm">{item?.trip?.travelType}</td>
    </tr>
  );
};

export default TravelRequestHistoryTableList;
