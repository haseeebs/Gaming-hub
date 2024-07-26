// import useData from "./useData"
import platforms from "../data/platforms";

import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import ms from "ms";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms('1d'), // 24h,
    initialData: { count: platforms.length, results: platforms, next: null },
  });

export default usePlatforms;
