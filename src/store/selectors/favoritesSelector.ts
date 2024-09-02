import { RootState } from "../store";

export const getFavorites = (state: RootState) => state.persistedReducer.favorites;
