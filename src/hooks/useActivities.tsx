import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Tag } from "./useTags";

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

const useActivities = (endpoint: string, selectedTag: Tag | null) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchActivityResponse>(endpoint, { signal: controller.signal, params: {tags: selectedTag?.name}, 
        headers: {'Content-Type': 'application/json'}})
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
  }, [selectedTag === null ? null : selectedTag]);
  return { activities, error, isLoading };
};

export default useActivities;
