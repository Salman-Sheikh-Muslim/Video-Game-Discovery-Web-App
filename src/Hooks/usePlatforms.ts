import platform from "../data/platform";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiPlatforms = new APIClient<Platform>("/genres");

const usePlatforms = () => 
useQuery({
  queryKey: ["Platforms"],
  queryFn: apiPlatforms.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
  initialData: {count: platform.length, results: platform}
})
/*
Initially the data is retrieved from the initialData property and stored inside the
cache because our staleTime is 24 hours the data wil be considered fresh for 24 hours and
no request to the backend will be send until the 24 hours pass.
*/
export default usePlatforms;
