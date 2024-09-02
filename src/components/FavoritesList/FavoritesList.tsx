import { MovieListItem } from "components";
import { useAppSelector } from "store/hooks";
import { getFavorites } from "store/selectors";
import { IMovie } from "types";
import { StyledFavoritesList } from "./styles";

export const FavoritesList = () => {
  const { favorites } = useAppSelector(getFavorites);

  return (
    <StyledFavoritesList>
      {favorites.map(({ year, title, poster, imdbID }: IMovie) => (
        <MovieListItem
          key={imdbID}
          year={year}
          title={title}
          poster={poster}
          imdbID={imdbID}
          isFavorite={true}
        />
      ))}
    </StyledFavoritesList>
  );
};
