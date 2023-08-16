import { Spinner, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";

const MovieGrid = () => {
  const { movies, error, isLoading } = useMovies();
  if (isLoading) return <Spinner />;
  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}
      <ul>
        {movies.map((m) => (
          <li key={m.id}>{m.original_title}</li>
        ))}
      </ul>
    </>
  );
};

export default MovieGrid;
