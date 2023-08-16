import apiClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { MovieResponse } from "./useMovies";

const useMovie = (movieId: string) => {
  return useQuery<MovieResponse, Error>({
    queryKey: ["movie", movieId],
    queryFn: () => apiClient.get(`/movie/${movieId}`).then((res) => res.data),
  });
};

export default useMovie;
