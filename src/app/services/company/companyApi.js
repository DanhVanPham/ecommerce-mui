import apiService from "../apiService";

export const companyApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getById: builder.query({
      query: (id) => ({
        url: `/Company/GetById/`,
        method: "GET",
        params: {
          id,
        },
      }),
    }),
    getProductsById: builder.query({
      query: (data) => ({
        url: `/Company/getproductsbycompany/`,
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useGetByIdQuery, useGetProductsByIdQuery } = companyApi;
