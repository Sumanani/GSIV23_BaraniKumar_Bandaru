import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
import { MovieQuery } from "../App";

export interface Movie {
  backdrop_path: string;
  id: number;
  original_title: string;
  vote_average: number;
  overview: string;
}

interface MovieResponse {
  results: Movie[];
}

// getting the endpoint based on the movie query and providing it to axios to fetch the data

const useMovies = (movieQuery: MovieQuery) => {
  const endpoint = movieQuery.query ? "/search/movie" : "/movie/upcoming";

  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<MovieResponse>(endpoint, {
        signal: controller.signal,
        params: { ...movieQuery },
      })
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, [movieQuery]);

  return { movies, error, isLoading };
};

export default useMovies;
