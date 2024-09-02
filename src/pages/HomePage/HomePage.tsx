import { MovieList } from "components";
import { LoadingMoreSpinner } from "components";
import { useEffect } from "react";
import { fetchMovies } from "store/features";
import { fetchShowMoreMovies, updatePage } from "store/features";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getMovies } from "store/selectors";
import { Clue, Container, EndMessage, ShowMoreButton } from "./styles";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { isLoadingMore, isFound, isLoading, page } = useAppSelector(getMovies);
  const isPage = page === 100;

  const handleClickMoreMovies = () => {
    dispatch(updatePage());
    dispatch(fetchShowMoreMovies(page.toString()));
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      {isFound ? (
        <>
          <MovieList />
          {isLoading ? (
            <></>
          ) : (
            <Container>
              {isPage ? (
                <EndMessage>The end</EndMessage>
              ) : (
                <ShowMoreButton onClick={handleClickMoreMovies}>
                  Show more {isLoadingMore && <LoadingMoreSpinner />}
                </ShowMoreButton>
              )}
            </Container>
          )}
        </>
      ) : (
        <Clue initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          We don’t have such films
        </Clue>
      )}
    </>
  );
};
