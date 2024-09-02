import {
  fetchSignUpUser,
  fetchSignInUser,
  setDarkMode,
  resetError,
  resetPassword,
  updateUserPassword,
} from "./userSlice";
import { addToFavorites, removeFromFavorites } from "./favoritesSlice";
import { fetchMovieDetailsByImdbID } from "./movieDetailsSlice";
import {
  fetchMovies,
  fetchShowMoreMovies,
  fetchSortMovies,
  fetchMoviesByParams,
  fetchMoviesRecommendations,
  updatePage,
} from "./moviesSlice";

import { fetchTrends } from "./trendsSlice";

export {
  fetchSignUpUser,
  fetchSignInUser,
  addToFavorites,
  removeFromFavorites,
  fetchMovieDetailsByImdbID,
  fetchMovies,
  fetchShowMoreMovies,
  fetchSortMovies,
  fetchMoviesByParams,
  fetchMoviesRecommendations,
  fetchTrends,
  setDarkMode,
  resetError,
  resetPassword,
  updateUserPassword,
  updatePage,
};
