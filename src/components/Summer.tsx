import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import ActivityGrid from "./activityGrid";
import TagList from "./TagList";
import { useState } from "react";
import { Tag } from "../hooks/useTags";

const SUMMER_ENDPOINT = "/activity/summer";

const Home = () => {
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);
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
        <GridItem area="aside" marginRight={4}>
          <TagList
            endpoint="/tag"
            onSelectTag={(tag) => setSelectedTag(tag)}
          ></TagList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <ActivityGrid endpoint={SUMMER_ENDPOINT} selectedTag={selectedTag} />
      </GridItem>
    </Grid>
  );
};

export default Home;
