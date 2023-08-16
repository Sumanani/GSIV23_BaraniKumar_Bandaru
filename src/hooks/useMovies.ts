import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

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

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<MovieResponse>("/movie/upcoming", { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setMovies(res.data.results);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return { movies, error, isLoading };
};

export default useMovies;
