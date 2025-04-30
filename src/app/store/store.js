import { configureStore } from '@reduxjs/toolkit';
import { bannerApi } from '../services/bannerApi';
import { productsApi } from '../services/productsApi';

const store = configureStore({
  reducer: {
    [bannerApi.reducerPath]: bannerApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bannerApi.middleware, productsApi.middleware),
});

export default store;