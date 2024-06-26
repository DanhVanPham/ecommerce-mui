import apiService from "../apiService";
import { setToken, signIn } from "../../redux/auth/authSlice";

export const authApi = apiService.injectEndpoints({
  enhanceEndpoints: { addTagTypes: ["UNAUTHORIZED", "UNKNOWN_ERROR"] },
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/Account/Login",
        method: "POST",
        data,
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const token = {
            accessToken: data.data.accessToken,
            expiresAt: data.data.expiresAt,
          };
          dispatch(setToken(token));
          // await dispatch(userApi.endpoints.getMe.initiate(null, { forceRefetch: true }));
          dispatch(signIn(token));
        } catch (err) {
          console.error(err);
        }
      },
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: "/logout",
        method: "POST",
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        await queryFulfilled;
      },
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/Account/Register",
        method: "POST",
        data,
      }),
    }),
  }),
});

// export hooks
export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  authApi;
