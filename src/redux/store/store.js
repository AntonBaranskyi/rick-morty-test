import { configureStore } from "@reduxjs/toolkit";
import heroes from "../slices/heroesSlice";
import singleHero from "../slices/singleHeroSlice";

export const store = configureStore({
  reducer: {
    heroes,
    singleHero,
  },
});
