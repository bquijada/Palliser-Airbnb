import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import ActivityGrid from "./activityGrid";
import TagList from "./TagList";

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
          <TagList endpoint="/tag"></TagList>
        </GridItem>
      </Show>
      <GridItem area="main">
         <ActivityGrid endpoint={SUMMER_ENDPOINT}/>
      </GridItem>
    </Grid>
  );
};

export default Home;
