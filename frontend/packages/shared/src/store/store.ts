import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import { authApi } from "./api/auth/authAPI";

// добавляйте сюда остальные редюсеры по мере необходимости

const rootReducer = combineReducers({
  user: userReducer,
  [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
