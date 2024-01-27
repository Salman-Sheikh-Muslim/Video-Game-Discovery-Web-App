import React from "react";
import { Game } from "../Hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageURL(game.background_image)} />
      <CardBody>
        {/* fonts size defined 2xl and so on defined Chakra */}
        <Heading fontSize="2xl">{game.name}</Heading>
        {/* {game.parent_platforms.map(platform => <Text>{platform.platform.name}</Text>)} */}
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          {/* With this mapping we are constructing an array of platform objects. */}
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
