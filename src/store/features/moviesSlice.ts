import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { transformShortMovieDescription } from "services/mappers";
import { moviesAPI } from "services";
import { FilterValue, IMovie } from "types";

interface MoviesState {
  movies: IMovie[];
  page: number;
  recommendations: IMovie[];
  isLoading: boolean;
  isLoadingMore: boolean;
  isFound: boolean;
  error: null | string;
}

const initialState: MoviesState = {
  movies: [],
  page: 1,
  recommendations: [],
  isLoading: false,
  isLoadingMore: false,
  isFound: true,
  error: null,
};

export const fetchMovies = createAsyncThunk<IMovie[]>("movies/fetchMovies", async () => {
  const response = await moviesAPI.getAll();

  return transformShortMovieDescription(response.Search);
});

export const fetchShowMoreMovies = createAsyncThunk<IMovie[], string, { rejectValue: string }>(
  "movies/fetchShowMoreMovies",
  async (page, { rejectWithValue }) => {
    try {
      const response = await moviesAPI.getMoreMovies(page);

      return transformShortMovieDescription(response.Search);
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.message);
    }
  },
);

export const fetchSortMovies = createAsyncThunk<IMovie[], string, { rejectValue: string }>(
  "movies/fetchSortMovies",
  async (movieTitle, { rejectWithValue }) => {
    try {
      const response = await moviesAPI.sortedMovies(movieTitle);
      return transformShortMovieDescription(response.Search);
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.message);
    }
  },
);

export const fetchMoviesByParams = createAsyncThunk<IMovie[], FilterValue, { rejectValue: string }>(
  "movies/fetchMoviesByParams",
  async (values, { rejectWithValue }) => {
    try {
      const response = await moviesAPI.sortedMoviesByUserParams(values);
      return transformShortMovieDescription(response.Search);
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.message);
    }
  },
);

export const fetchMoviesRecommendations = createAsyncThunk<
  IMovie[],
  string,
  { rejectValue: string }
>("movies/fetchMoviesRecommendations", async (movieTitle, { rejectWithValue }) => {
  try {
    const response = await moviesAPI.sortedMovies(movieTitle);
    return transformShortMovieDescription(response.Search);
  } catch (error) {
    const axiosError = error as AxiosError;

    return rejectWithValue(axiosError.message);
  }
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    updatePage(state) {
      if (state.page === 100) {
        state.page = 100;
      } else state.page += 1;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isFound = true;
      state.movies = payload;
    });
    builder.addCase(fetchMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = "Error";
      }
    });
    builder.addCase(fetchShowMoreMovies.pending, (state) => {
      state.isLoadingMore = true;
      state.error = null;
    });
    builder.addCase(fetchShowMoreMovies.fulfilled, (state, { payload }) => {
      state.isLoadingMore = false;
      payload.forEach((movie) => state.movies.push(movie));
    });
    builder.addCase(fetchShowMoreMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoadingMore = false;
        state.error = "Error";
      }
    });
    builder.addCase(fetchSortMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSortMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isFound = true;
      state.movies = payload;
    });
    builder.addCase(fetchSortMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.isFound = false;
        state.error = "Error";
      }
    });
    builder.addCase(fetchMoviesByParams.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMoviesByParams.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isFound = true;
      state.movies = payload;
    });
    builder.addCase(fetchMoviesByParams.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.isFound = false;
        state.error = "Error";
      }
    });
    builder.addCase(fetchMoviesRecommendations.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMoviesRecommendations.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.recommendations = payload;
    });
    builder.addCase(fetchMoviesRecommendations.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = "Error";
      }
    });
  },
});

export const { updatePage } = movieSlice.actions;

export default movieSlice.reducer;
