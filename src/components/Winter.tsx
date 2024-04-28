import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import ActivityGrid from "./activityGrid";
import TagList from "./TagList";

const WINTER_ENDPOINT = "/activity/winter";

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
            <TagList endpoint="/tag"/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <ActivityGrid endpoint={WINTER_ENDPOINT}/>
      </GridItem>
    </Grid>
  );
};

export default Home;
