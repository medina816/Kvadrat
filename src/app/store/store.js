import { configureStore } from '@reduxjs/toolkit';
import { bannerApi } from '../services/bannerApi';
import { productsApi } from '../services/productsApi';
import { allPropertiesApi } from '../services/AllPropertiesApi';
import { authApi } from '../../features/auth/authApi';
import { maneAdmin } from '../services/ManeAdmin'; 

const store = configureStore({
  reducer: {
    [bannerApi.reducerPath]: bannerApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [allPropertiesApi.reducerPath]: allPropertiesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [maneAdmin.reducerPath]: maneAdmin.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      bannerApi.middleware,
      productsApi.middleware,
      allPropertiesApi.middleware,
      authApi.middleware,
      maneAdmin.middleware
    ),
});

export default store;
