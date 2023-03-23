import { configureStore } from "@reduxjs/toolkit";
import heroes from "../slices/heroesSlice";
import singleHero from "../slices/singleHeroSlice";
import auth from "../slices/authSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    heroes,
    singleHero,
    auth
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch