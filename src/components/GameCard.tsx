import React from "react";
import { Game } from "../Hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        {/* fonts size defined 2xl and so on defined Chakra */}
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
