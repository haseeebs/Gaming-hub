import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: ` "nav" "main"`,
        lg: ` "nav nav" "aside main" `,
      }}
    >
      <GridItem area={"nav"} bg={"purple"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"blue"}>
          aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"yellow"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;