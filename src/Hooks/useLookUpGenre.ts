import React from 'react'
import usePlatforms from './usePlatforms';
import useGenres from './useGenres';

// const useLookUp = <T extends { id: number }>(data: { results: T[] }, id?: number): T | undefined => {
//     return data.results.find((item) => item.id === id);
//   };
  
const useLookUpGenre = (id?: number) => {
        const { data: genres } = useGenres();
     return  genres?.results.find(
        (g) => g.id === id
        );
        };

export default useLookUpGenre 


//  const useGenre = (id?: number) => {
//         const { data: genres } = useGenres();
//         const genre = genres?.results.find(
//         (g) => g.id === id
//         );
//         }