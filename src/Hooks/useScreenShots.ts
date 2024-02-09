import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import  ScreenShots  from '../entities/ScreenShots'



const useScreenShots = (gameId: number) => {
    const apiClient = new APIClient<ScreenShots>(`/games/${gameId}/screenshots`);
    
    return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn:  apiClient.getAll,
})
}

export default useScreenShots;