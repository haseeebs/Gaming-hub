import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import Screenshot from "../entities/Screenshot";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => apiClient.getAll({ params: { game: gameId } }),
  });
};

export default useScreenshots;