const dateHelper = (data: Date) => {
  const date = new Date(data || "");
  if (!isNaN(date.getTime())) {
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate;
  } else {
    return "";
  }
};

export default dateHelper;
