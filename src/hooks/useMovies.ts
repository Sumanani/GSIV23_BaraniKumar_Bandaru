import apiClient from "../services/apiClient";
import { MovieQuery } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query";

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

const useMovies = (movieQuery: MovieQuery) => {
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
  });
};

// getting the endpoint based on the movie query and providing it to axios to fetch the data

// const useMovies = (movieQuery: MovieQuery) => {
//   const endpoint = movieQuery.query ? "/search/movie" : "/movie/upcoming";

//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true);
//     apiClient
//       .get<MovieResponse>(endpoint, {
//         signal: controller.signal,
//         params: { ...movieQuery },
//       })
//       .then((res) => {
//         setMovies(res.data.results);
//         setLoading(false);
//         setError("");
//       })
//       .catch((err) => {
//         setLoading(false);
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//       });

//     return () => controller.abort();
//   }, [movieQuery]);

//   return { movies, error, isLoading };
// };

export default useMovies;
