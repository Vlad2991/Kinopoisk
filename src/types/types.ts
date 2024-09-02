export interface IMoviesResponseAPI {
  Search: IMovieAPI[];
  totalResults: string;
  Response: boolean;
  Error?: string;
}

export interface IMovieAPI {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface IMovieDetailsAPI {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: RatingAPI[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface RatingAPI {
  Source: string;
  Value: string;
}

export interface IMovie {
  poster: string;
  title: string;
  type: string;
  year: string;
  imdbID: string;
}

export interface IMovieDetails {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
  dvd: string;
  boxOffice: string;
  production: string;
  website: string;
  response: string;
}

export interface IOption {
  value: string;
  label: string;
}

export interface FilterValue {
  type: string;
  s: string;
  y: string;
}