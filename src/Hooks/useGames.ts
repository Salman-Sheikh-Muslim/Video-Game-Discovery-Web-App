import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

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
const useGames = (
  gameQuery: GameQuery
  //   selectedGenre: Genre | null,
  //   selectedPlatform: Platform | null
  //
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      },
    },

    [gameQuery]
    // [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
