import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const fetchHero = createAsyncThunk("hero/fetch", async (params: string | undefined) => {
  const responce = await fetch(
    `https://rickandmortyapi.com/api/character/${params}`
  );

  return (await responce.json() as IHero);
});

interface IHero {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  }
  image: string
}

interface ISingleState {
  hero: IHero | null;
  statusHero: 'loading' | 'success' | 'error';
}

const initialState: ISingleState = {
  hero: null,
  statusHero: "loading",
};

const singleHeroSlice = createSlice({
  name: "singleHero",
  initialState,
  reducers: {
    getHero: (state, action: PayloadAction<IHero>) => {
      state.hero = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchHero.pending, (state) => {
      state.statusHero = "loading";
    });

    builder.addCase(fetchHero.fulfilled, (state, action: PayloadAction<IHero>) => {
      state.hero = action.payload;
      state.statusHero = "success";
    });

    builder.addCase(fetchHero.rejected, (state) => {
      state.statusHero = "error";
    });
  },
});

export const { getHero } = singleHeroSlice.actions;

export default singleHeroSlice.reducer;