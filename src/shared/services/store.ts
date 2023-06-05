import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { vendorsApi } from "../../modules/vendors-list/query";

export const store = configureStore({
  reducer: {
    [vendorsApi.reducerPath]: vendorsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(vendorsApi.middleware),
});

setupListeners(store.dispatch);
