import { configureStore } from '@reduxjs/toolkit';
import { bannerApi } from '../services/bannerApi';
import { productsApi } from '../services/productsApi';
import { authApi } from '../../features/auth/authApi';

const store = configureStore({
  reducer: {
    [bannerApi.reducerPath]: bannerApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      bannerApi.middleware,
      productsApi.middleware,
      authApi.middleware
    ),
});

export default store;
