import {
  DefaultApi,
  TvSeriesPopularList200Response,
  TvSeriesPopularListRequest,
} from "@/api";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useApi } from ".";
import { createCacheKey, QUERY_KEY, makeRequest, CustomQueryOptions } from "..";

type Params = TvSeriesPopularListRequest;

type ApiResponse = TvSeriesPopularList200Response;

const getCacheKey = (params: Params) =>
  createCacheKey(QUERY_KEY.popularShows, params);

const useFetch = (params: Params) => {
  const api = useApi(DefaultApi);
  return () => makeRequest(api.tvSeriesPopularList(params));
};

export const usePopularShowData = (
  params: Params,
  options?: CustomQueryOptions<ApiResponse, Error>
) => {
  const fetchData = useFetch(params);
  return useSuspenseQuery<ApiResponse, Error>({
    queryKey: getCacheKey(params),
    queryFn: fetchData,
    ...options,
  });
};
