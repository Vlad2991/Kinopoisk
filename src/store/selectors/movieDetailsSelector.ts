import { RootState } from "../store";

export const getDetailsMovie = (state: RootState) => state.persistedReducer.movie;
