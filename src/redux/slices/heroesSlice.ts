import { ICharList } from './../../components/CharList/CharList';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const fetchHeroes = createAsyncThunk(
  "heroes/fetch",
  async (pageNum: number = 1) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${pageNum}`
    );
    const data = await response.json();
    const characters = data.results;
    return characters as ICharList[];
  }
);

interface IHeroState {
  items: ICharList[];
  status: 'loading' | 'success' | 'error';
  pageNum: number;
}

const initialState: IHeroState = {
  items: [],
  status: "loading", // loading,success ,error
  pageNum: 1,
};

const heroesSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    getAllHeroes: (state, action: PayloadAction<ICharList[]>) => {
      state.items = action.payload;
    },

    setPageNum: (state, action: PayloadAction<number>) => {
      state.pageNum = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchHeroes.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchHeroes.fulfilled, (state, action: PayloadAction<ICharList[]>) => {
      const temp = action.payload.slice(6, 14);
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
