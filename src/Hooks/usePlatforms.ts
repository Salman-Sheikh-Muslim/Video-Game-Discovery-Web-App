import platform from "../data/platform";
import { useQuery } from "@tanstack/react-query";
import apiFetchData from "../services/api-fetch-data";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
//const usePlatforms = () => ({data: platform, isLoading: false, error: null});


const usePlatforms = () => apiFetchData.getGames<Platform>("Platforms","/platforms/lists/parents")
// useQuery({
//   queryKey: ["Platforms"],
//   queryFn: () => apiClient
//   .get<FetchResponse<Platform>>("/platforms/lists/parents")
//   .then((res) => res.data),

//   staleTime: 24 * 60 * 60 * 1000, // 24 hours
//   initialData: {count: platform.length, results: platform}
// })
/*
Initially the data is retrieved from the initialData property and stored inside the
cache because our staleTime is 24 hours the data wil be considered fresh for 24 hours and
no request to the backend will be send until the 24 hours pass.
*/
export default usePlatforms;
