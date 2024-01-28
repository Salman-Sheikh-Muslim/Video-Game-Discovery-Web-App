import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
// const useGenres = () => useData<Genre>("/genres");
const useGenres = () => ({data: genres, isLoading: false, error: null});
/*
THe reason we should return an object with these properties is to minimize the impact
of these changes on the consumer of this hook.
*/

export default useGenres;
