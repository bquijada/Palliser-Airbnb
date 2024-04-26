import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Activity {
  name: string;
  id: number;
  image: string;
  description: string;
  link: string;
}

interface FetchActivityResponse {
  activities: Activity[];
}

const useActivities = (endpoint: string) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchActivityResponse>(endpoint)
      .then((res) => {
        setActivities(res.data.activities);
        setLoading(false);
      })
      .catch((err) => {setError(err.message)
        setLoading(false);
      });
  }, []);
  return { activities, error, isLoading };
};

export default useActivities;
