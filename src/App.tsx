import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
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
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
