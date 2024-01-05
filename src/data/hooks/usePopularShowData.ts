import {
  DefaultApi,
  TvSeriesPopularList200Response,
  TvSeriesPopularListRequest,
} from "@/api";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { useApi } from ".";
import { createCacheKey, QUERY_KEY, makeRequest } from "..";

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
  options?: UseQueryOptions<ApiResponse, Error>
) => {
  const fetchData = useFetch(params);
  return useQuery<ApiResponse, Error>(getCacheKey(params), fetchData, options);
};
