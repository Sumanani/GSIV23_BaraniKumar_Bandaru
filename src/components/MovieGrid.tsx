import { Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import { MovieQuery } from "../App";
import React from "react";

interface Props {
  movieQuery: MovieQuery;
}

const MovieGrid = ({ movieQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useMovies(movieQuery);

  if (isLoading) return <Spinner />;

  const fetchedMoviesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedMoviesCount}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={
        <Center h="100px">
          <Spinner />
        </Center>
      }
    >
      {error && <Text color={"red"}>{error.message}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={6}>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default MovieGrid;
