import { Text, Flex, Heading, IconButton } from "@chakra-ui/react";
import React from "react";
import { IoClose } from "react-icons/io5";
import useGenres from "../Hooks/useGenres";
import useLookUpPlatform from "../Hooks/useLookUp";
import useLookUpGenre from "../Hooks/useLookUpGenre";
import usePlatforms from "../Hooks/usePlatforms";
import useGameQueryStore from "../storeGameQuery";
import useLookUpOrderLabel from "../Hooks/useLookUpOrderLabel";
//TODO if a game is clicked anywhere it should show game detail page

const FilterReset = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useLookUpGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = useLookUpPlatform(platformId);

  const currentState = useGameQueryStore.getState();

  const searchText = currentState.gameQuery.searchText;

  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const order = useLookUpOrderLabel(sortOrder);

  const resetGenre = () => {
    useGameQueryStore.getState().setGenreId(undefined);
  };

  const resetPlatform = () => {
    useGameQueryStore.getState().setPlatformId(undefined);
  };

  const resetSearchText = () => {
    useGameQueryStore.getState().setSearchText(undefined);
  };

  const resetSortOrder = () => {
    useGameQueryStore.getState().setSortOrder(undefined);
  };

  return (
    // <Flex alignItems="center" justifyContent="space-between">

    <Flex justifyContent="flex-start" marginBottom={5}>
      {platform && (
        <Flex alignItems="center" mr={4}>
          <Heading fontSize="md">{platform.name}</Heading>
          <IconButton
            ml={2}
            aria-label="Reset platform"
            icon={<IoClose />}
            onClick={resetPlatform}
          />
        </Flex>
      )}
      {genre && (
        <Flex alignItems="center" ml={4}>
          <Heading fontSize="md">{genre.name}</Heading>
          <IconButton
            ml={2}
            aria-label="Reset genre"
            icon={<IoClose />}
            onClick={resetGenre}
          />
        </Flex>
      )}
      {searchText && (
        <Flex alignItems="center" ml={4}>
          <Heading fontSize="md">{searchText}</Heading>
          <IconButton
            ml={2}
            aria-label="Reset Search Text"
            icon={<IoClose />}
            onClick={resetSearchText}
          />
        </Flex>
      )}
      {order && (
        <Flex alignItems="center" ml={4}>
          <Heading fontSize="md">{order.label}</Heading>
          <IconButton
            ml={2}
            aria-label="Reset Search Text"
            icon={<IoClose />}
            onClick={resetSortOrder}
          />
        </Flex>
      )}
    </Flex>
  );
};

export default FilterReset;

/*
const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useLookUpGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = useLookUpPlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  setGenreId(undefined);

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  setPlatformId(undefined);
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
*/
