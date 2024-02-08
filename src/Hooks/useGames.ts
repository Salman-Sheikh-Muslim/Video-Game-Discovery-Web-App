import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../storeGameQuery";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;

}

const apiGames = new APIClient<Game>("/games" );

 const useGames = () =>{

  const  gameQuery  = useGameQueryStore(s => s.gameQuery);

 
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["Games",  gameQuery],
    queryFn: ({pageParam = 1}) => apiGames.getAll( {
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
        // _start: (pageParam - 1) * gameQuery.page,
        // _limit: gameQuery.page,
      },}),
  
 
    //keepPreviousData: true,

    getNextPageParam: (lastPage, allPages) => {
      // 1 -> 2
                return lastPage.next ? allPages.length + 1 : undefined;
              },

    staleTime: ms('1d'), // 24 hours

      });
    }
export default useGames;
