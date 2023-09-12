import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main Explore
      </GridItem>
    </Grid>
  );
};

export default Home;
