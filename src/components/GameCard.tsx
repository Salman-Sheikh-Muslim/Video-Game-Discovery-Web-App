import React from "react";
import Game from "../entities/Game";
import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Link to={"/games/" + game.slug}>
      <Card>
        <Image src={getCroppedImageURL(game.background_image)} />
        <CardBody minHeight="100%">
          {/* <CardBody minHeight="100%" bgColor="#202020" textColor="white"> */}
          {/* fonts size defined 2xl and so on defined Chakra */}
          {/* {game.parent_platforms.map(platform => <Text>{platform.platform.name}</Text>)} */}
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            {/* With this mapping we are constructing an array of platform objects. */}
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading
            fontSize="2xl"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
