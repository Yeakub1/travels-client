import { baseApi } from "../baseApi";

export const travelBuddyRequestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTravelBuddyRequest: build.query({
      query: () => ({
        url: `/trip/request`,
        method: "GET",
      }),
    }),
    createTravelBuddyRequest: build.mutation({
      query: ({
        tripId,
        userId,
        name,
        email,
        number,
        country,
        city,
      }: {
        tripId: string;
        userId: string;
        name: string;
        email: string;
        number: string;
        country: string;
        city: string;
      }) => {
        return {
          url: `/trip/${tripId}/request`,
          method: "POST",
          body: { userId, name, email, number, country, city },
        };
      },
    }),
  }),
});

export const {
  useCreateTravelBuddyRequestMutation,
  useGetTravelBuddyRequestQuery,
} = travelBuddyRequestApi;
