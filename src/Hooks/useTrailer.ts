import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import  Game  from "../entities/Game";
import  Trailer  from "../entities/Trailer";



const useTrailer = (gameId: number) => {
    const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
    
    return useQuery({
    queryKey: ['trailers', gameId],
    queryFn:  apiClient.getAll,
})
}

export default useTrailer;