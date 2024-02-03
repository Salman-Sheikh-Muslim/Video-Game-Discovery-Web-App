import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../Hooks/useGenres";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
  //   selectedGenre: Genre | null;
  //   selectedPlatform: Platform | null;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text> {error.message} </Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </React.Fragment>
      ))}
      {/* {data?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))} */}
      <button
        className="btn btn-primary my-3"
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </SimpleGrid>
  );
};

export default GameGrid;
