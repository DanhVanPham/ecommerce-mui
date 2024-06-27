import apiService from "../apiService";

export const ORDER_TAG = "Order-Tag";

export const orderApi = apiService
  .enhanceEndpoints({ addTagTypes: [ORDER_TAG] })
  .injectEndpoints({
    endpoints: (builder) => ({
      // getOrders: builder.query({
      //     query: () => ({
      //         url: '/Order/GetAllOrders',
      //     }),
      //     transformResponse: response => response?.data,
      //     providesTags: (result, error, arg) => result ? [
      //         { type: ORDER_TAG },
      //         ...result?.map(({ id }) => ({ type: ORDER_TAG, id }))
      //     ] : [{ type: ORDER_TAG }]
      // }),
      getByStatus: builder.query({
        query: (body) => ({
          url: "/Order/GetByStatus",
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data;",
          },
          body,
          formData: true,
        }),
        transformResponse: (response) => response?.data,
        providesTags: (result, error, arg) =>
          result
            ? [
                { type: ORDER_TAG },
                ...result?.map(({ id }) => ({ type: ORDER_TAG, id })),
              ]
            : [{ type: ORDER_TAG }],
      }),
      getOrderById: builder.query({
        query: (id) => ({
          url: "/Order/GetOrder",
          params: { id },
        }),
        providesTags: (result, error, arg) => [{ type: ORDER_TAG, arg }],
      }),
      createOrder: builder.mutation({
        query: (data) => ({
          url: "/Order/CreateOrder",
          method: "POST",
          data,
        }),
        invalidatesTags: (result, error, arg) => {
          if (error) return [];
          return [{ type: ORDER_TAG }];
        },
      }),
    }),
  });

export const {
  useGetByStatusQuery,
  useGetOrderByIdQuery,
  useCreateOrderMutation,
} = orderApi;
