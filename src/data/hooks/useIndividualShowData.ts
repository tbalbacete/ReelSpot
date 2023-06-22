import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { QUERY_KEY, createCacheKey, makeRequest, useApi } from "@/data";
import { DefaultApi, TvSeriesDetails200Response, TvSeriesDetailsRequest } from "@/api";

type Params = TvSeriesDetailsRequest;

type ApiResponse = TvSeriesDetails200Response;

const getCacheKey = (params: Params) =>
  createCacheKey(QUERY_KEY.movieSearch, params);

const useFetch = (params: Params) => {
  const api = useApi(DefaultApi);
  return () => makeRequest(api.tvSeriesDetails(params));
};

export const useIndividualShowDetails = (
  params: Params,
  options?: UseQueryOptions<ApiResponse, Error>
) => {
  const fetchData = useFetch(params);
  return useQuery<ApiResponse, Error>(getCacheKey(params), fetchData, options);
};