const destinationHelper = (getFilterData: any) => {
  interface DataItem {
    destination: string;
  }

  const allDestination = new Set<string>(
    getFilterData?.data?.data?.flatMap(
      (item: DataItem) =>
        item?.destination?.split(",").map((name: string) => name.trim()) || []
    ) || []
  );

  const uniqueDestination: string[] = [...allDestination];

  return uniqueDestination;
};

export default destinationHelper;
