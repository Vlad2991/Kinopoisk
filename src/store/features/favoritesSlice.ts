import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovieDetails } from "types";

interface IFavoritesState {
  favorites: IMovieDetails[];
}

export const initialState: IFavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addToFavorites(state, { payload }: PayloadAction<IMovieDetails>) {
      const result = state.favorites.find((movie) => movie.imdbID === payload.imdbID);
      if (!result) state.favorites.push(payload);
    },
    removeFromFavorites(state, { payload }: PayloadAction<string>) {
      state.favorites = state.favorites.filter((movie) => {
        return movie.title !== payload;
      });
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
