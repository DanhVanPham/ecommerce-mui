import { jwtDecode } from "jwt-decode";
import apiService from "../apiService";
import { setToken, setUser, signIn } from "../../redux/auth/authSlice";

export const authApi = apiService.injectEndpoints({
  enhanceEndpoints: { addTagTypes: ["UNAUTHORIZED", "UNKNOWN_ERROR"] },
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/Account/Login",
        method: "POST",
        data,
      }),
      async onQueryStarted(formData, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const token = data?.token ?? "";
          console.log(data);
          const decoded = jwtDecode(token);
          console.log(decoded);
          dispatch(setToken(token));
          dispatch(
            setUser({
              id: decoded?.sub,
              firstName: decoded?.FirstName,
              lastName: decoded?.LastName,
              address: decoded?.address,
              phoneNumber: decoded?.phoneNumber,
              email: decoded?.email,
            })
          );
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
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/Account/UpdateProfile",
        method: "POST",
        data,
      }),
      async onQueryStarted(formData, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          const { token, firstName, lastName, address, phoneNumber, email } =
            data ?? {};
          dispatch(setToken(token));
          dispatch(
            setUser({
              firstName,
              lastName,
              address,
              phoneNumber,
              email,
            })
          );
          dispatch(signIn(token));
        } catch (err) {
          console.error(err);
        }
      },
    }),
    updatePassword: builder.mutation({
      query: (data) => ({
        url: "/Account/UpdatePassword",
        method: "POST",
        data,
      }),
    }),
  }),
});

// export hooks
export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  authApi;
