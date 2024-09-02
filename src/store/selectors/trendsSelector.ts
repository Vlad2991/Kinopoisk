import { RootState } from "../store";

export const getTrends = (state: RootState) => state.persistedReducer.trends;
