import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ManeAdmin = createApi({
  reducerPath: 'ManeAdmin',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    getVisits: builder.query({
      query: ({ startDate, endDate }) => ({
        url: '/metrics',
        method: 'GET',
        params: { startDate, endDate },
      }),
    }),
  }),
});

export const { useGetVisitsQuery } = ManeAdmin;