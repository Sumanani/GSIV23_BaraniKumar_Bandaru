import { create } from "zustand";
import { MovieQuery } from "./App";

interface MovieQueryStore {
  movieQuery: MovieQuery;
  updateSearchQuery: (query: string) => void;
}

const useMovieStore = create<MovieQueryStore>((set) => ({
  movieQuery: { query: "" },
  updateSearchQuery: (query) => set(() => ({ movieQuery: { query } })),
}));

export default useMovieStore;
