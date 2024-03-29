import React from 'react'
import usePlatforms from './usePlatforms';
import useGenres from './useGenres';

// const useLookUp = <T extends { id: number }>(data: { results: T[] }, id?: number): T | undefined => {
//     return data.results.find((item) => item.id === id);
//   };
  
const useLookUpPlatform = (id?: number) => {
    const { data: platforms } = usePlatforms();
    return platforms?.results.find((p) => p.id === id);
    };

export default useLookUpPlatform


//  const useGenre = (id?: number) => {
//         const { data: genres } = useGenres();
//         const genre = genres?.results.find(
//         (g) => g.id === id
//         );
//         }