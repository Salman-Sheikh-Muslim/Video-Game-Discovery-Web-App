import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../Hooks/useGame";
import { Text, Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExanpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); //by adding '!' to the slug we are telling the typescript compiler that this constant will never be null.

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
