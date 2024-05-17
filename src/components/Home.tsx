import { Box, Grid, GridItem, HStack, Show, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import NavBar from "./NavBar";
import HomeStack from "./HomeStack";

const Home = () => {
  const isMobile = useBreakpointValue({ base: true, md: false, lg: false });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="main">
          <Box textAlign="center">
            <h1 className="heading">Welcome To Our Kicking Horse Airbnb</h1>
          </Box>
          <HomeStack isMobile={isMobile} ></HomeStack>
      </GridItem>
    </Grid>
  );
};

export default Home;
