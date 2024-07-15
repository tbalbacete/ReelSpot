import {
  DefaultApi,
  MovieCredits200Response,
  MovieCreditsRequest,
} from "@/api";
import { QUERY_KEY, createCacheKey, makeRequest, useApi } from "@/data";
import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";

type Params = MovieCreditsRequest;

type ApiResponse = MovieCredits200Response;

const getCacheKey = (params: Params) =>
  createCacheKey(QUERY_KEY.movieCredits, params);

const useFetch = (params: Params) => {
  const api = useApi(DefaultApi);
  return () => makeRequest(api.movieCredits(params));
};

export const useMovieCredits = (
  params: Params,
  options?: UseQueryOptions<ApiResponse, Error>
) => {
  const fetchData = useFetch(params);
  return useSuspenseQuery<ApiResponse, Error>({
    queryKey: getCacheKey(params),
    queryFn: fetchData,
    ...options,
  });
};
