import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { transformShortMovieDescription } from "services/mappers";
import { moviesAPI } from "services";
import { IMovie } from "types";

interface TrendsState {
  trends: IMovie[];
  isLoading: boolean;
  error: null | string;
}

const initialState: TrendsState = {
  trends: [],
  isLoading: false,
  error: null,
};

export const fetchTrends = createAsyncThunk<IMovie[], string, { rejectValue: string }>(
  "trends/fetchTrends",
  async (year, { rejectWithValue }) => {
    try {
      const response = await moviesAPI.getTrends(year);
      return transformShortMovieDescription(response.Search);
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.message);
    }
  },
);

const trendsSlice = createSlice({
  name: "trends",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTrends.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTrends.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.trends = payload;
    });
    builder.addCase(fetchTrends.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = "error";
      }
    });
  },
});

export default trendsSlice.reducer;
