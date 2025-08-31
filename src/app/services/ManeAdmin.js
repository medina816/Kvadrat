import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const maneAdmin = createApi({
  reducerPath: 'maneAdminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getMetrics: builder.query({
      query: ({ startDate, endDate }) => ({
        url: 'metrics',
        params: { startDate, endDate },
      }),
    }),
  }),
});

export const { useGetMetricsQuery } = maneAdmin;
