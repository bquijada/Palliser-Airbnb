import { SimpleGrid } from "@chakra-ui/react";
import useActivities from "../hooks/useActivities";
import { ActivityCard } from "./ActivityCard";

interface ActivityGridProps {
  endpoint: string;
}

const ActivityGrid = (props: ActivityGridProps) => {
  const { endpoint } = props;
  const { activities, error } = useActivities(endpoint);
  return (
    <>
      {" "}
      {error && <span>{error}</span>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={10}>
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity}></ActivityCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ActivityGrid;
