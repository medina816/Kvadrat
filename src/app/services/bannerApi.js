import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bannerApi = createApi({
  reducerPath: 'bannerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    getBanners: builder.query({
      query: () => 'banners',
      
    }),

    getBannerById: builder.query({
      query: (id) => `banners/${id}`,
    }),

    createBanner: builder.mutation({
      query: (formData) => ({
        url: 'banners',
        method: 'POST',
        body: formData,
      }),
    }),

    updateBanner: builder.mutation({
      query: ({ id, formData }) => ({
        url: `banners/${id}`,
        method: 'PUT',
        body: formData,
      }),
    }),

    deleteBanner: builder.mutation({
      query: (id) => ({
        url: `banners/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});
export const {
    useGetBannersQuery,
    useGetBannerByIdQuery,
    useCreateBannerMutation,
    useUpdateBannerMutation,
    useDeleteBannerMutation,
  } = bannerApi;  