import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchActivityResponse>(endpoint, { signal: controller.signal })
      .then((res) => {
        setActivities(res.data.activities);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { activities, error, isLoading };
};

export default useActivities;
