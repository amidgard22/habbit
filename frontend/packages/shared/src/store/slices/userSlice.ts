import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../api/auth/authAPI";
import { UserType } from "../api/auth/types";

export interface UserInitialState {
  isAuth: boolean;
  token: string;
  user: UserType | null;
}

const initialState: UserInitialState = {
  isAuth: false,
  token: localStorage.getItem("token") || "",
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(
      state,
      action: PayloadAction<{ token: string; user: UserInitialState["user"] }>
    ) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuth = true;
      localStorage.setItem("token", action.payload.token);
    },
    logout(state) {
      state.token = "";
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.token = action.payload.accessToken;
        state.user = action.payload.user;
        state.isAuth = true;
        localStorage.setItem("token", action.payload.accessToken);
      }
    );
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
