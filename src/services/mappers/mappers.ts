import { IMovie, IMovieAPI, IMovieDetails, IMovieDetailsAPI } from "types";

export const transformShortMovieDescription = (search: IMovieAPI[]): IMovie[] => {
  return search.map((movie: IMovieAPI) => {
    return {
      poster: movie.Poster,
      title: movie.Title,
      type: movie.Type,
      year: movie.Year,
      imdbID: movie.imdbID,
    };
  });
};

export const transformMovieCardInfo = ({
  Title,
  Year,
  Rated,
  Released,
  Runtime,
  Genre,
  Director,
  Writer,
  Actors,
  Plot,
  Language,
  Country,
  Awards,
  Poster,
  Metascore,
  imdbRating,
  imdbVotes,
  imdbID,
  Type,
  DVD,
  BoxOffice,
  Production,
  Website,
  Response,
}: IMovieDetailsAPI): IMovieDetails => {
  return {
    title: Title,
    year: Year,
    rated: Rated,
    released: Released,
    runtime: Runtime,
    genre: Genre,
    director: Director,
    writer: Writer,
    actors: Actors,
    plot: Plot,
    language: Language,
    country: Country,
    awards: Awards,
    poster: Poster,
    metascore: Metascore,
    imdbRating: imdbRating,
    imdbVotes: imdbVotes,
    imdbID: imdbID,
    type: Type,
    dvd: DVD,
    boxOffice: BoxOffice,
    production: Production,
    website: Website,
    response: Response,
  };
};
