import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import APIClient from "../services/api-client";
export interface Genre {
  id: number;
  name: string; 
  image_background: string;
}
const apiGenres = new APIClient<Genre>("/genres");
 //const useGenres = () => useData<Genre>("/genres");
//const useGenres = () => ({data: genres, isLoading: false, error: null});

 //const useGenres = () => apiFetchData.getGames<Genre>("Genres","/genres")
 const useGenres = () => useQuery({
  queryKey: ["Genres"],
  queryFn: apiGenres.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
  initialData: {count: genres.length, results: genres}
/*
Initially the data is retrieved from the initialData property and stored inside the
cache because our staleTime is 24 hours the data wil be considered fresh for 24 hours and
no request to the backend will be send until the 24 hours pass.
*/
})


/*
THe reason we should return an object with these properties is to minimize the impact
of these changes on the consumer of this hook.
*/

export default useGenres;
