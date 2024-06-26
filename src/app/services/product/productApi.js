import apiService from "../apiService";

export const productApi = apiService
    .injectEndpoints({
        endpoints: builder => ({
            filterProducts: builder.query({
                query: (params) => ({
                    url: '/Product/GetAllProduct',
                    method: 'GET',
                    params
                }),
                transformResponse: response => response?.data
            }),
            getProductById: builder.query({
                query: (id) => ({
                    url: `/Product/getproduct`,
                    method: 'GET',
                    params: { id }
                })
            })
        })
    })

export const {
    useFilterProductsQuery,
    useGetProductByIdQuery
} = productApi;