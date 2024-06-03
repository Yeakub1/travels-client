import { baseApi } from "../baseApi";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
    }),
    updateProfile: build.mutation({
      query: (data) => {
        return {
          url: "/profile",
          method: "PUT",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
