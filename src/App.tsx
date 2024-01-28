import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./Hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  //instead of this we will use a Query Object Pattern
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  return (
    <>
      {/* templateAreas={`"nav nav" "aside main"`}
    Defining 2 rows having 2 columns.
    */}
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        {/* //wider than 1024px */}
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        {/* By using show we are specifying that Aside should only appear in large and above devices */}
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack spacing={5} paddingLeft={10} marginBottom={1}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) => {
                setGameQuery({ ...gameQuery, platform });
              }}
            />
            <SortSelector />
          </HStack>
          <GameGrid
            gameQuery={gameQuery}
            // selectedPlatform={gameQuery.platform}
            // selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
