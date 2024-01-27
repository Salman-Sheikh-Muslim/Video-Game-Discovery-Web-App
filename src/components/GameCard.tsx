import React from "react";
import { Game } from "../Hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import PlatformIconList from "./PlatformIconList";

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
        {/* {game.parent_platforms.map(platform => <Text>{platform.platform.name}</Text>)} */}
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        {/* With this mapping we are constructing an array of platform objects. */}
      </CardBody>
    </Card>
  );
};

export default GameCard;
