import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bannerApi = createApi({
  reducerPath: 'bannerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Banners'],
  endpoints: (builder) => ({
    getBanners: builder.query({
      query: () => '/banners',
      providesTags: ['Banners'],
    }),
    createBanner: builder.mutation({
      query: (formData) => ({
        url: '/banners',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Banners'],
    }),
    updateBanner: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/banners/${id}`,
        method: 'PUT',
        body: formData,
      }),
      invalidatesTags: ['Banners'],
    }),
    deleteBanner: builder.mutation({
      query: (id) => ({
        url: `/banners/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Banners'],
    }),
  }),
});

export const {
  useGetBannersQuery,
  useCreateBannerMutation,
  useUpdateBannerMutation,
  useDeleteBannerMutation,
} = bannerApi;
