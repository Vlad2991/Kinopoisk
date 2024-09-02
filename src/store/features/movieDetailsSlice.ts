import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { transformMovieCardInfo } from "services/mappers";
import { moviesAPI } from "services";
import { IMovieDetails } from "types";

interface MovieDetailsState {
  movieDetails: IMovieDetails;
  isLoading: boolean;
  error: null | string;
}

export const initialState: MovieDetailsState = {
  movieDetails: {} as IMovieDetails,
  isLoading: false,
  error: null,
};

export const fetchMovieDetailsByImdbID = createAsyncThunk<
  IMovieDetails,
  string,
  { rejectValue: string }
>("movie/fetchMovieDetailsByImdbID", async (imdbID, { rejectWithValue }) => {
  try {
    const response = await moviesAPI.getDetailsByImdbID(imdbID);
    return transformMovieCardInfo(response);
  } catch (error) {
    const axiosError = error as AxiosError;

    return rejectWithValue(axiosError.message);
  }
});

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovieDetailsByImdbID.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMovieDetailsByImdbID.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.movieDetails = payload;
      }
    });
    builder.addCase(fetchMovieDetailsByImdbID.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = "Error";
      }
    });
  },
});

export default movieSlice.reducer;
