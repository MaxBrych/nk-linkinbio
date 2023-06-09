import useSWR from "swr";
import { client as sanityClient } from "../../lib/sanity.client";

const fetcher = (query: string) => sanityClient.fetch(query);

export const usePost = () => {
  const query = `*[_type == "instagramPost"] | order(timestamp desc) {
    name,
    mediaType,
    mediaUrl,
    username,
    timestamp,
    articleLink
  }
  `;

  const { data, error } = useSWR(query, fetcher, { refreshInterval: 1000 });

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
