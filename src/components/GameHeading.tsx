import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres, { Genre } from "../Hooks/useGenres";
import usePlatforms, { Platform } from "../Hooks/usePlatforms";
import useLookUp from "../Hooks/useLookUp";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  //Games
  //Action Games
  //Xbox Games
  //Xbox Action Games
  const { data: genres } = useGenres();
  const genre = useLookUp<Genre>(genres, gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = useLookUp<Platform>(platforms, gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
