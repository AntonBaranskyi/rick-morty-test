import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { getUserData } = authSlice.actions;

export default authSlice.reducer;
