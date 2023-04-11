import { createSlice } from "@reduxjs/toolkit";

interface IProfile {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface IToken {
  accessToken: string;
  expiresAt: number;
}

interface IAuth {
  userData: {
    provider: string;
    _profile: IProfile;
    _token: IToken;
  } | null;
}
const initialState: IAuth = {
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUserData: (state, action) => {
      state.userData = action.payload;
    },
    logoutUser: (state) => {
      state.userData = null;
    },
  },
});

export const { getUserData, logoutUser } = authSlice.actions;

export default authSlice.reducer;
