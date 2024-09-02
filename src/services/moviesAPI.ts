import axios from "axios";
import { FilterValue, IMovieDetailsAPI, IMoviesResponseAPI } from "types";

class MoviesAPI {
  private readonly BASE_URL = process.env.REACT_APP_MOVIE_BASE_URL as string;
  private readonly API_KEY = process.env.REACT_APP_MOVIE_API_KEY as string;

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  private readonly words = [
    "Batman",
    "War",
    "love",
    "money",
    "friends",
    "Thor",
    "avengers",
    "women",
    "star",
    "man",
  ];

  private readonly getRandomWord = (words: string[]) => {
    const random = (Math.random() * this.words.length) | 0;
    const randomWord = words[random];
    return randomWord;
  };

  public getAll = async () => {
    const params = {
      s: this.getRandomWord(this.words),
    };

    const { data } = await this.API.get<IMoviesResponseAPI>(this.API_KEY, { params });

    return data;
  };

  public getMoreMovies = async (page: string) => {
    const params = {
      s: this.getRandomWord(this.words),
      page: page,
    };

    const { data } = await this.API.get<IMoviesResponseAPI>(this.API_KEY, { params });

    return data;
  };

  public getDetailsByImdbID = async (imdbID: string) => {
    const params = {
      i: imdbID,
    };

    const { data } = await this.API.get<IMovieDetailsAPI>(this.API_KEY, { params });

    return data;
  };

  public getTrends = async (year: string) => {
    const params = {
      s: this.getRandomWord(this.words),
      y: year,
    };

    const { data } = await this.API.get<IMoviesResponseAPI>(this.API_KEY, { params });

    return data;
  };

  public sortedMovies = async (movieTitle: string) => {
    const params = {
      s: movieTitle,
    };

    const { data } = await this.API.get<IMoviesResponseAPI>(this.API_KEY, {
      params,
    });

    return data;
  };

  public sortedMoviesByUserParams = async (values: FilterValue) => {
    const params = {
      ...values,
    };

    const { data } = await this.API.get<IMoviesResponseAPI>(this.API_KEY, { params });

    return data;
  };
}

export const moviesAPI = new MoviesAPI();
