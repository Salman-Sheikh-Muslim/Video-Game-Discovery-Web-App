    import {create} from 'zustand';
    
    interface GameQuery {
        genreId?: number;
        platformId?: number;
        sortOrder?: string;
        searchText?: string;
        // page: number;
        // page_size: 12;
      }

    interface GameQueryStore {
        gameQuery: GameQuery
        setSearchText: (searchText: string | undefined) => void;
        setGenreId: (genreId: number | undefined) => void;
        setPlatformId: (platformId: number  | undefined) => void;
        setSortOrder: (sortOrder: string | undefined) => void;
      }

    const useGameQueryStore = create<GameQueryStore>(set => ({
        gameQuery: {},
        setSearchText: (searchText) => set(() => ({ gameQuery : { searchText}})),
        setGenreId: (genreId) => set(store => ({ gameQuery : {...store.gameQuery, genreId} })),
        setPlatformId: (platformId) => set(store => ({ gameQuery : {...store.gameQuery, platformId} })),
        setSortOrder: (sortOrder) => set(store => ({ gameQuery : { ...store.gameQuery,sortOrder}})),
        
    }))

    export default useGameQueryStore;