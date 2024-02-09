import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../Hooks/useGame";
import { Text, Heading, Spinner, SimpleGrid } from "@chakra-ui/react";
import ExpandableText from "../components/ExanpandableText";
import RectangleUI from "../components/RectangleUI";
import DefinitionItems from "../components/DefinitionItems";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";
import useTrailer from "../Hooks/useTrailer";
import GameTrailer from "../components/GameTrailer";
import GameScreenShots from "../components/GameScreenShots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); //by adding '!' to the slug we are telling the typescript compiler that this constant will never be null.
  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      {/* <RectangleUI
        parent_platforms={game.parent_platforms}
        metascore={game.metacritic}
      /> */}

      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenShots gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
