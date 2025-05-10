import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const allPropertiesApi = createApi({
  reducerPath: 'allPropertiesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    getFilteredProducts: builder.query({
      query: (params) => ({
        url: 'products',
        method: 'GET',
        params,
      }),
    }),
  }),
});

export const { useGetFilteredProductsQuery } = allPropertiesApi;
