import { FavoritesIsEmptyIcon } from "assets";
import { FavoritesList } from "components";
import { useAppSelector } from "store/hooks";
import { getFavorites } from "store/selectors";
import { FavoritesEmpty } from "./styles";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getFavorites);

  return (
    <>
      {favorites.length === 0 ? (
        <FavoritesEmpty>
          <FavoritesIsEmptyIcon />
        </FavoritesEmpty>
      ) : (
        <FavoritesList />
      )}
    </>
  );
};
