import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
export interface Genre {
  id: number;
  name: string; 
  image_background: string;
}
const apiGenres = new APIClient<Genre>("/genres");

 const useGenres = () => useQuery({
  queryKey: ["Genres"],
  queryFn: apiGenres.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
  initialData: genres
 // initialData: {count: genres.length, results: genres, next: null}
/*
Initially the data is retrieved from the initialData property and stored inside the
cache because our staleTime is 24 hours the data wil be considered fresh for 24 hours and
no request to the backend will be send until the 24 hours pass.
*/
})


export default useGenres;
