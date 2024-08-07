import {
  DefaultApi,
  MovieDetails200Response,
  MovieDetailsRequest,
} from "@/api";
import { QUERY_KEY, createCacheKey, makeRequest, useApi } from "@/data";
import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";

type Params = MovieDetailsRequest;

type ApiResponse = MovieDetails200Response;

const getCacheKey = (params: Params) =>
  createCacheKey(QUERY_KEY.movieDetails, params);

const useFetch = (params: Params) => {
  const api = useApi(DefaultApi);
  return () => makeRequest(api.movieDetails(params));
};

export const useMovieDetails = (
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
