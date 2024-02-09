import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text> {error.message} </Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, pages) => total + pages.results.length, 0) || 0; //Giving default value of 0

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage} // by providind doule exclamation undefined will be converted to boolean false.
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <Box padding={2}>
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
                  <GameCardContainer gameId={game.id} key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))}
              </React.Fragment>
            ))}
          </SimpleGrid>
        </Box>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;

{
  /* <InfiniteScroll
dataLength={data?.pages.length !== undefined ? data.pages.length : 0}
next={fetchNextPage}
hasMore={true}
loader={<h4>Loading...</h4>}
style={{ display: "inline-block" }}
endMessage={
  <p style={{ textAlign: "center" }}>
    <b>Yay! You have seen it all</b>
  </p>
}
>
<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
  {data?.pages.map((page, index) => (
    <React.Fragment key={index}>
      {page.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </React.Fragment>
  ))}
</SimpleGrid>
</InfiniteScroll> */
}
