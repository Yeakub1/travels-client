const TravelRequestHistoryTableList = ({ item }: any) => {
  return (
    <tr key={item?.id}>
      <td className="px-4 py-3">{item?.trip?.destination}</td>
      <td className="px-4 py-3">{item?.status}</td>
      <td className="px-4 py-3">{item?.trip?.startDate}</td>
      <td className="px-4 py-3">{item?.trip?.endDate}</td>
      <td className="px-4 py-3">{item?.trip?.location}</td>
      <td className="px-4 py-3">{item?.trip?.travelType}</td>
    </tr>
  );
};

export default TravelRequestHistoryTableList;
