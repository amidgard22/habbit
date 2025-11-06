import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInitialState {
  isAuth: boolean;
  token: string;
}

const initialState: UserInitialState = {
  isAuth: false,
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.isAuth = true;
    },
    logout(state) {
      state.token = "";
      state.isAuth = false;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
