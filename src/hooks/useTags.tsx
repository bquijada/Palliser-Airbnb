import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface Tag {
  id: number;
  name: string;
}

interface FetchTagsResponse {
  tags: Tag[];
}

const useTags = (
  endpoint: string,
  selectedTag?: Tag | null,
  requestConfig?: AxiosRequestConfig
) => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchTagsResponse>(endpoint, { signal: controller.signal })
      .then((res) => {
        setTags(res.data.tags);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { tags, error, isLoading };
};

export default useTags;
