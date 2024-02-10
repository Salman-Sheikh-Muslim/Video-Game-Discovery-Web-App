import { Box, Grid, Show, GridItem, Flex, Image } from "@chakra-ui/react";
import React from "react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import FilterReset from "../components/FilterReset";
import GenreSelector from "../components/GenreSelector";

const HomePage = () => {
  return (
    <>
      {/* <div id="top"></div> */}
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        {/* //wider than 1024px */}
        {/* By using show we are specifying that Aside should only appear in large and above devices */}
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem padding={5} area="main">
          <GameHeading />
          <FilterReset />
          <Flex paddingBottom={10} marginBottom={1}>
            <Show below="lg">
              <Box marginRight={5}>
                <GenreSelector />
              </Box>
            </Show>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
