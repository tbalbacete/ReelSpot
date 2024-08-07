import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { QUERY_KEY, createCacheKey, makeRequest, useApi } from "@/data";
import {
  DefaultApi,
  MoviePopularList200Response,
  MoviePopularListRequest,
} from "@/api";

type Params = MoviePopularListRequest;

type ApiResponse = MoviePopularList200Response;

const getCacheKey = (params: Params) =>
  createCacheKey(QUERY_KEY.popularMovies, params);

const useFetch = (params: Params) => {
  const api = useApi(DefaultApi);
  return () => makeRequest(api.moviePopularList(params));
};

export const usePopularMovies = (
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
