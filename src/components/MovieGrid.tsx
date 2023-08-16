import { Center, HStack, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import React from "react";

const MovieGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useMovies();

  if (isLoading)
    return (
      <HStack justify="center" w="100%" h="500px">
        <Spinner />
      </HStack>
    );

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
