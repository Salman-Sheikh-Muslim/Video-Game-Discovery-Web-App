import { Box, Grid, Show, GridItem, Flex, Image } from "@chakra-ui/react";
import React from "react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import FilterReset from "../components/FilterReset";
import { HashLink as Link } from "react-router-hash-link";
import { IoMdArrowDropupCircle } from "react-icons/io";

const HomePage = () => {
  return (
    <>
      <div id="top"></div>
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
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
          <GameGrid />
        </GridItem>
        <Link to="/#top">
          <Box
            position="fixed"
            bottom="20px"
            right={["16px", "84px", "84px", "84px", "120px"]}
            zIndex={2}
          >
            <Image as={IoMdArrowDropupCircle} w="60px" h="60px" />
          </Box>
        </Link>
      </Grid>
    </>
  );
};

export default HomePage;
