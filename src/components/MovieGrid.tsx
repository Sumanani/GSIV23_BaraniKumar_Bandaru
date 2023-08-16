import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const { movies, error, isLoading } = useMovies();
  if (isLoading) return <Spinner />;
  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={6}>
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
