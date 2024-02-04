import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres, { Genre } from "../Hooks/useGenres";
import usePlatforms, { Platform } from "../Hooks/usePlatforms";
import useLookUpPlatform from "../Hooks/useLookUp";
import useLookUpGenre from "../Hooks/useLookUpGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  //Games
  //Action Games
  //Xbox Games
  //Xbox Action Games
  const { data: genres } = useGenres();
  //const genre = useLookUp<Genre>(genres, gameQuery.genreId);
  const { data: platforms } = usePlatforms();
  //const platform = useLookUp<Platform>(platforms, gameQuery.platformId);
  const platform = useLookUpPlatform(gameQuery.platformId);
  const genre = useLookUpGenre(gameQuery.genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
