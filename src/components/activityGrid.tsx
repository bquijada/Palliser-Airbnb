import useActivities from "../hooks/useActivities";

interface Activity {
  name: string;
  id: number;
}

interface FetchActivityResponse {
  activities: Activity[];
}

interface ActivityGridProps {
  endpoint: string;
}

const ActivityGrid = (props: ActivityGridProps) => {
  const { endpoint } = props;
  const { activities, error } = useActivities(endpoint);
  return (
    <> {error && <span>{error}</span>}
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>
    </>
  );
};

export default ActivityGrid;
