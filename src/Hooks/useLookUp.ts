import React from 'react'

const useLookUp = <T extends { id: number }>(data: { results: T[] }, id?: number): T | undefined => {
    return data.results.find((item) => item.id === id);
  };
  

export default useLookUp