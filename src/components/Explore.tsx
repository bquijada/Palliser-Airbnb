import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import ActivityGrid from "./activityGrid";
import TagList from "./TagList";
import { useEffect, useRef, useState } from "react";
import { Tag } from "../hooks/useTags";
import { useParams } from "react-router-dom";

const Explore = () => {
  const { season } = useParams();
  const prevSeasonRef = useRef(season);
  const [activityEndpoint, setActivityEndpoint] = useState<string>(
    `/activity/${season}`
  );
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);
  useEffect(() => {
    setSelectedTag(null);
    if (season !== prevSeasonRef.current) {
      setActivityEndpoint(`/activity/${season}`);
    } prevSeasonRef.current = season;
  }, [season]);
  const resetSelectedTag = () => {
    setSelectedTag(null);
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar resetSelectedTag={resetSelectedTag}></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" marginRight={4}>
          <TagList endpoint="/tag" onSelectTag={(tag) => setSelectedTag(tag)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <ActivityGrid
          endpoint={`/activity/${season}`}
          selectedTag={selectedTag}
          key={activityEndpoint}
        />
      </GridItem>
    </Grid>
  );
};

export default Explore;
