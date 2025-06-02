import { configureStore } from '@reduxjs/toolkit';
import { bannerApi } from '../services/bannerApi';
import { authApi } from '../../features/auth/authApi';
import { maneAdmin } from '../services/ManeAdmin'; 
import { productApi } from '../services/productsApi'

const store = configureStore({
  reducer: {
    [bannerApi.reducerPath]: bannerApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [maneAdmin.reducerPath]: maneAdmin.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      bannerApi.middleware,
      productApi.middleware,
      authApi.middleware,
      maneAdmin.middleware
    ),
});

export default store;
