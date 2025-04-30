import { configureStore } from '@reduxjs/toolkit';
import { bannerApi } from '../services/bannerApi';

const store = configureStore({
  reducer: {
    [bannerApi.reducerPath]: bannerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bannerApi.middleware),
});

export default store;