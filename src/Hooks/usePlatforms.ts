import platform from "../data/platform";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import  Platform  from "../entities/Platform";
const apiPlatforms = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => 
useQuery({
  queryKey: ["Platforms"],
  queryFn: apiPlatforms.getAll,
  staleTime: ms('1d'), // 24 hours
  initialData: platform
})
/*
Initially the data is retrieved from the initialData property and stored inside the
cache because our staleTime is 24 hours the data wil be considered fresh for 24 hours and
no request to the backend will be send until the 24 hours pass.
*/
export default usePlatforms;

