import { useQuery } from "@tanstack/react-query";
import apiClient from "./api-client";
import { GameQuery } from "../App";
import { Platform } from "../Hooks/usePlatforms";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

  export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
  }


  class apiFetchData {
   
    getGames<T>( KEY_FOR_CACHE: string, URL: string, gameQuery?: GameQuery) {

        return useQuery<FetchResponse<T>, Error>({
            queryKey: [KEY_FOR_CACHE,  gameQuery],
            queryFn: () => apiClient
            .get<FetchResponse<T>>( URL
                ,  {
              params: {
                genres: gameQuery?.genre?.id,
                parent_platforms: gameQuery?.platform?.id,
                ordering: gameQuery?.sortOrder,
                search: gameQuery?.searchText
              },}
              )
            .then((res) => res.data),
            //.then((res) => res.data.results),
            staleTime: 24 * 60 * 60 * 1000, // 24 hours
          
           
            //[selectedGenre?.id, selectedPlatform?.id]
            });

    }

  }
  
  export default new apiFetchData;