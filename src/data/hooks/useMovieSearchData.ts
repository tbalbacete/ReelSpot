import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { QUERY_KEY, createCacheKey, makeRequest, useApi } from "@/data";
import { DefaultApi, SearchMovie200Response, SearchMovieRequest } from "@/api";

type Params = SearchMovieRequest;

type ApiResponse = SearchMovie200Response;

const getCacheKey = (params: Params) =>
  createCacheKey(QUERY_KEY.movieSearch, params);

const useFetch = (params: Params) => {
  const api = useApi(DefaultApi);
  return () => makeRequest(api.searchMovie(params));
};

export const useMovieSearch = (
  params: Params,
  options?: UseQueryOptions<ApiResponse, Error>
) => {
  const fetchData = useFetch(params);
  return useQuery<ApiResponse, Error>(getCacheKey(params), fetchData, options);
};