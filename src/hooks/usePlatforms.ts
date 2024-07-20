// import useData from "./useData"
import platforms from "../data/platforms";

import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";

const apiClient = new APIClient("/games");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
