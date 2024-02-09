import { Heading } from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";
import Genre from "../entities/Genre";
import usePlatforms from "../Hooks/usePlatforms";
import Platform from "../entities/Platform";
import useLookUpPlatform from "../Hooks/useLookUp";
import useLookUpGenre from "../Hooks/useLookUpGenre";
import useGameQueryStore from "../storeGameQuery";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useLookUpGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = useLookUpPlatform(platformId);
  //Games
  //Action Games
  //Xbox Games
  //Xbox Action Games
  const { data: genres } = useGenres();
  //const genre = useLookUp<Genre>(genres, gameQuery.genreId);
  const { data: platforms } = usePlatforms();
  //const platform = useLookUp<Platform>(platforms, gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
