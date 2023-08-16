import apiClient from "../services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import useMovieStore from "../store";

export interface Movie {
  backdrop_path: string;
  id: number;
  original_title: string;
  vote_average: number;
  overview: string;
}

interface MovieResponse {
  results: Movie[];
  total_pages: number;
}

const useMovies = () => {
  const movieQuery = useMovieStore((s) => s.movieQuery);
  const endpoint = movieQuery.query ? "/search/movie" : "/movie/upcoming";

  return useInfiniteQuery<MovieResponse, Error>({
    queryKey: ["movies", movieQuery],

    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get<MovieResponse>(endpoint, {
          params: { ...movieQuery, page: pageParam },
        })
        .then((res) => res.data),

    getNextPageParam: (lastPage, allPages) =>
      allPages.length < lastPage.total_pages ? allPages.length + 1 : undefined,

    staleTime: 10 * 60 * 1000, //10 mins
  });
};

export default useMovies;
