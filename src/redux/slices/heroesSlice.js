import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHeroes = createAsyncThunk(
  "heroes/fetch",
  async (pageNum = 1) => {
    const responce = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${pageNum}`
    );

    return await responce.json();
  }
);

const initialState = {
  items: [],
  status: "loading", // loading,success ,error
  pageNum: 1,
};

const heroesSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    getAllHeroes: (state, action) => {
      state.items = action.payload;
    },

    setPageNum: (state, action) => {
      state.pageNum = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchHeroes.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchHeroes.fulfilled, (state, action) => {
      const temp = action.payload.results.slice(6, 14);
      const sortedHeroes = temp.sort((a, b) => a.name.localeCompare(b.name));
      state.items = sortedHeroes;
      state.status = "success";
    });

    builder.addCase(fetchHeroes.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const { getAllHeroes, setPageNum } = heroesSlice.actions;

export default heroesSlice.reducer;
