import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripData: [],
  limit: "",
  page: "",
};

const setTrips = createSlice({
  name: "allTrips",
  initialState,
  reducers: {
    setTripData: (state: any, action) => {
      state.tripData = action?.payload?.data;
    },
    setLimit: (state: any, action) => {
      state.limit = action?.payload;
    },
    setPage: (state: any, action) => {
      state.page = action?.payload;
    },
  },
});

export const { setTripData, setLimit, setPage } = setTrips.actions;

export default setTrips.reducer;
