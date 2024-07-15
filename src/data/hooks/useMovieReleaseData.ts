import {
  DefaultApi,
  MovieReleaseDates200Response,
  MovieReleaseDatesRequest,
} from "@/api";
import { QUERY_KEY, createCacheKey, makeRequest, useApi } from "@/data";
import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";

type Params = MovieReleaseDatesRequest;

type ApiResponse = MovieReleaseDates200Response;

const getCacheKey = (params: Params) =>
  createCacheKey(QUERY_KEY.movieReleases, params);

const useFetch = (params: Params) => {
  const api = useApi(DefaultApi);
  return () => makeRequest(api.movieReleaseDates(params));
};

export const useMovieReleases = (
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
