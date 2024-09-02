import { FavoritesIcon, TrendsIcon } from "assets";
import { removeFromFavorites } from "store/features";
import { useAppDispatch } from "store/hooks";
import { Color } from "ui";
import { Movie, MoviePoster, Released, CustomLink, Title } from "./styles";

interface IProps {
  title: string | null;
  year: string | null;
  poster: string | undefined;
  imdbID: string;
  isTrend?: boolean;
  isFavorite?: boolean;
}

export const MovieListItem = ({ title, poster, imdbID, year, isTrend, isFavorite }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <Movie
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      whileHover={{ scale: 1.1, transition: { delay: 0.2 } }}
    >
      <>
        <MoviePoster src={poster} />
        {isTrend && (
          <TrendsIcon
            style={{
              position: "absolute",
              margin: "10px 5px",
              width: "20px",
              height: "30px",
              padding: "3px",
              borderRadius: "5px",
              background: `${Color.Primary}`,
              fill: `${Color.White}`,
            }}
          />
        )}
        {isFavorite && (
          <FavoritesIcon
            style={{
              position: "absolute",
              margin: "10px 5px",
              width: "20px",
              height: "30px",
              padding: "3px",
              borderRadius: "5px",
              background: `${Color.Primary}`,
              fill: `${Color.White}`,
              cursor: "pointer",
            }}
            onClick={() => dispatch(removeFromFavorites(title as string))}
          />
        )}
      </>
      <CustomLink to={`/movies/${imdbID}`}>
        <Title>{title}</Title>
      </CustomLink>
      <Released>Released: {year}</Released>
    </Movie>
  );
};
