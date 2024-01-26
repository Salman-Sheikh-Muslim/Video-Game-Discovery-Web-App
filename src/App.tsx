import { Grid, GridItem, Show } from "@chakra-ui/react";

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
      >
        {/* //wider than 1024px */}
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        {/* By using show we are specifying that Aside should only appear in large and above devices */}
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="blue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
