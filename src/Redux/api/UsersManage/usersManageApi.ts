import { baseApi } from "../baseApi";

export const usersManageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),

    updateUserStatus: build.mutation({
      query: ({ data, id }) => {
        return {
          url: `/users/${id}`,
          method: "PUT",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetAllUsersQuery, useUpdateUserStatusMutation } =
  usersManageApi;
