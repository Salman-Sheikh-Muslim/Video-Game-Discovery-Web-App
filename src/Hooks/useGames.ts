import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;

}

const apiGames = new APIClient<Game>("/games" );

 const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["Games",  gameQuery],
    queryFn: ({pageParam = 1}) => apiGames.getAll( {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
        // _start: (pageParam - 1) * gameQuery.page,
        // _limit: gameQuery.page,
      },}),
  
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    //keepPreviousData: true,

    getNextPageParam: (lastPage, allPages) => {
      // 1 -> 2
                return lastPage.next ? allPages.length + 1 : undefined;
              }
      });
export default useGames;
