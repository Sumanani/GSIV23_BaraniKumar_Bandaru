import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "../services/apiClient";

interface Movie {
  backdrop_path: string;
  id: number;
  original_title: string;
  vote_average: number;
}

interface MovieResponse {
  results: Movie[];
}

const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<MovieResponse>("/movie/upcoming")
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err.message));
  });
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
