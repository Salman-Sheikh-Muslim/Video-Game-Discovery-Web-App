import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

//params is a property AxiosRequestConfig Object
// const useGames = (
//   gameQuery: GameQuery
//   //   selectedGenre: Genre | null,
//   //   selectedPlatform: Platform | null
//   //
// ) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText
//       },
//     },

//     [gameQuery]
//     // [selectedGenre?.id, selectedPlatform?.id]
//   );

const useGames = (
   gameQuery: GameQuery
  ) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["Games",  gameQuery],
    queryFn: () => apiClient
    .get<FetchResponse<Game>>( "/games",  {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      },})
    .then((res) => res.data),
    //.then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  
   
    //[selectedGenre?.id, selectedPlatform?.id]
    });
export default useGames;
