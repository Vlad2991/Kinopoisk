import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FavoritesIcon, notFound } from "assets";
import { LoadingSpinner } from "components";
import { useToggle } from "hooks";
import { getDetailsMovie, getUserInfo } from "store/selectors";
import { IMovieDetails } from "types";
import {
  Actors,
  BoxOffice,
  Buttons,
  Country,
  Description,
  Director,
  FilmPlot,
  MoviePoster,
  Production,
  Rating,
  RatingBoard,
  RatingImdb,
  Released,
  Runtime,
  Type,
  Wrapper,
  Writers,
  Year,
  Title,
  SwiperContainer,
} from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  addToFavorites,
  fetchMovieDetailsByImdbID,
  fetchMoviesRecommendations,
} from "store/features";

export const MoviePage = () => {
  const { imdbID = "" } = useParams();
  const dispatch = useAppDispatch();
  const { movieDetails, isLoading } = useAppSelector(getDetailsMovie);
  const { isAuth } = useAppSelector(getUserInfo);
  const [state, toggle] = useToggle(false);

  const {
    title,
    year,
    released,
    runtime,
    director,
    writer,
    actors,
    plot,
    country,
    poster,
    imdbRating,
    genre,
    boxOffice,
    production,
  } = movieDetails || ({} as IMovieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetailsByImdbID(imdbID));
    dispatch(fetchMoviesRecommendations(title));
  }, [dispatch, imdbID, title]);

  const handleAddFavorites = () => {
    dispatch(addToFavorites(movieDetails));
    toggle();
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Wrapper initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
        {poster === "N/A" ? <MoviePoster src={notFound} /> : <MoviePoster src={poster} />}
        {isAuth && (
          <Buttons $isAddToFavorites={state} onClick={handleAddFavorites}>
            <FavoritesIcon />
          </Buttons>
        )}

        <Type>{genre}</Type>
        <Title>{title}</Title>
        <RatingBoard>
          <Rating>{imdbRating}</Rating>
          <RatingImdb>IMDb {imdbRating}</RatingImdb>
          <Runtime>{runtime}</Runtime>
        </RatingBoard>
        <FilmPlot>{plot}</FilmPlot>
        <Description>
          <Year>Year: {year}</Year>
          <Released>Released: {released}</Released>
          <BoxOffice>BoxOffice: {boxOffice}</BoxOffice>
          <Country>Country: {country}</Country>
          <Production>Production: {production}</Production>
          <Actors>Actors: {actors}</Actors>
          <Director>Director: {director}</Director>
          <Writers>Writers: {writer}</Writers>
        </Description>
      </Wrapper>
      <SwiperContainer>

      </SwiperContainer>
    </>
  );
};
