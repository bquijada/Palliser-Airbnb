import { SimpleGrid } from "@chakra-ui/react";
import useActivities from "../hooks/useActivities";
import { ActivityCard } from "./ActivityCard";
import ActivityCardSkeleton from "./ActivityCardSkeleton";
import { Tag } from "../hooks/useTags";

interface ActivityGridProps {
  endpoint: string,
  selectedTag: Tag | null
}

const ActivityGrid = ({endpoint, selectedTag}: ActivityGridProps) => {
  const { activities, error, isLoading } = useActivities(endpoint, selectedTag);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {" "}
      {error && <span>{error}</span>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={10}>
        {isLoading && skeletons.map(skeleton => <ActivityCardSkeleton key={skeleton}/>)}
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity}></ActivityCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ActivityGrid;
