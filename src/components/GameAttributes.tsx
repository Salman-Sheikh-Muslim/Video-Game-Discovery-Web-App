import React from "react";
import Game from "../entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItems from "./DefinitionItems";

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <>
      <SimpleGrid columns={2} as="dl">
        <DefinitionItems term="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <Text margin={0} key={platform.id}>
              {platform.name}
            </Text>
          ))}
        </DefinitionItems>
        <DefinitionItems term="MetaScore">
          <CriticScore score={game.metacritic} />
        </DefinitionItems>

        <DefinitionItems term="Genres">
          {game.genres.map((genre) => (
            <Text margin={0} key={genre.id}>
              {genre.name}
            </Text>
          ))}
        </DefinitionItems>
        <DefinitionItems term="Publishers">
          {game.publishers?.map((publisher) => (
            <Text margin={0} key={publisher.id}>
              {publisher.name}
            </Text>
          ))}
        </DefinitionItems>
      </SimpleGrid>
    </>
  );
};

export default GameAttributes;
