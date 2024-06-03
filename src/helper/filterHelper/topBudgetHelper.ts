const topBudgetHelper = (getFilterData: any) => {
  const topBudget = Math.max(
    ...(getFilterData?.data?.data?.map((a: any) => a.budget) || [0])
  );
  return topBudget;
};

export default topBudgetHelper;
