// import useData from "./useData";
import genres from "../data/genres";

import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import ms from "ms";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms('1d'),
    initialData: { count: genres.length, results: genres, next: null },
  });

export default useGenres;
