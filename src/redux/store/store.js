import { configureStore } from "@reduxjs/toolkit";
import heroes from "../slices/heroesSlice";
import singleHero from "../slices/singleHeroSlice";
import auth from "../slices/authSlice";

export const store = configureStore({
  reducer: {
    heroes,
    singleHero,
    auth
  },
});
