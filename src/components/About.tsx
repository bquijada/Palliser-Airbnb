import { Grid, GridItem, HStack, Image, Spacer, Text, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./NavBar";
import img from "../assets/clem&bren.jpg";
import AboutStack from "./AboutStack";

const About = () => {
  const isMobile = useBreakpointValue({ base: true, md:false, lg: false });
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
        <h1 className="heading">About Us: Brenda & Clément</h1>
      <AboutStack isMobile={isMobile}></AboutStack>
      </GridItem>
    </Grid>
  );
};

export default About;
