import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";
import ActivityGrid from "./activityGrid";
const SUMMER_ENDPOINT = "/activity/summer";

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
        <GridItem area="aside">
        </GridItem>
      </Show>
      <GridItem area="main">
         <ActivityGrid endpoint={SUMMER_ENDPOINT}/>
      </GridItem>
    </Grid>
  );
};

export default Home;
