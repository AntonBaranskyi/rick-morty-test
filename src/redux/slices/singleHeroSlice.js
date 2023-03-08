import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHero = createAsyncThunk("hero/fetch", async (params) => {
  const responce = await fetch(
    `https://rickandmortyapi.com/api/character/${params}`
  );

  return await responce.json();
});

const initialState = {
  hero: {},
  status: "loading", // loading,success ,error
};

const singleHeroSlice = createSlice({
  name: "singleHero",
  initialState,
  reducers: {
    getHero: (state, action) => {
      state.hero = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchHero.pending, (state) => {
      state.status = "loading";
      state.hero = {};
    });

    builder.addCase(fetchHero.fulfilled, (state, action) => {
      state.hero = action.payload;
      state.status = "success";
    });

    builder.addCase(fetchHero.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const { getHero } = singleHeroSlice.actions;

export default singleHeroSlice.reducer;
