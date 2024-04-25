import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Activity {
    name: string;
    id: number;
    image: string;
  }
  
  interface FetchActivityResponse {
    activities: Activity[];
  }
  
const useActivities = (endpoint: string) => {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      apiClient
        .get<FetchActivityResponse>(endpoint)
        .then((res) => setActivities(res.data.activities))
        .catch(err => setError(err.message));
    }, []);
    return {activities, error};
  };

export default useActivities;