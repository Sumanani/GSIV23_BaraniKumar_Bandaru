import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import { MovieQuery } from "../App";

interface Props {
  movieQuery: MovieQuery;
}

const MovieGrid = ({ movieQuery }: Props) => {
  const { movies, error, isLoading } = useMovies(movieQuery);
  console.log(movies);
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
