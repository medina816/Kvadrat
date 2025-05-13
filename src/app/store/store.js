import { configureStore } from '@reduxjs/toolkit';
import { bannerApi } from '../services/bannerApi';
import { productsApi } from '../services/productsApi';
import { allPropertiesApi } from '../services/AllPropertiesApi';
import { authApi } from '../../features/auth/authApi';
import { ManeAdmin } from '../services/ManeAdmin'; 

const store = configureStore({
  reducer: {
    [bannerApi.reducerPath]: bannerApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [allPropertiesApi.reducerPath]: allPropertiesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [ManeAdmin.reducerPath]: ManeAdmin.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      bannerApi.middleware,
      productsApi.middleware,
      allPropertiesApi.middleware,
      authApi.middleware,
      ManeAdmin.middleware
    ),
});

export default store;
