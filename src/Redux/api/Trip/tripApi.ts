import { baseApi } from "../baseApi";

export const tripApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTrip: build.query({
      query: (prams) => ({
        url: `/trips?${prams}`,
        method: "GET",
      }),
    }),
    getPostedTrip: build.query({
      query: () => ({
        url: `/tripsPosted`,
        method: "GET",
      }),
    }),
    getTripForFilter: build.query({
      query: () => ({
        url: `/trips`,
        method: "GET",
      }),
    }),
    getTripForAdmin: build.query({
      query: () => ({
        url: `/tripsForAdmin`,
        method: "GET",
      }),
    }),
    getSingleTrip: build.query({
      query: (id) => ({
        url: `/trips/${id}`,
        method: "GET",
      }),
    }),
    createTrip: build.mutation({
      query: (data) => {
        return {
          url: "/trips",
          method: "POST",
          body: data,
        };
      },
    }),
    updateTrip: build.mutation({
      query: ({ id, data }) => {
        return {
          url: `/trips/update/${id}`,
          method: "PUT",
          body: data,
        };
      },
    }),
    DeleteTrip: build.mutation({
      query: (id) => {
        return {
          url: `/trips/delete/${id}`,
          method: "Delete",
        };
      },
    }),
  }),
});

export const {
  useCreateTripMutation,
  useGetTripQuery,
  useGetTripForFilterQuery,
  useGetSingleTripQuery,
  useGetPostedTripQuery,
  useDeleteTripMutation,
  useUpdateTripMutation,
  useGetTripForAdminQuery,
} = tripApi;
