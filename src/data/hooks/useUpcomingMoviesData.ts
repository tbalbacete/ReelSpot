import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { QUERY_KEY, createCacheKey, makeRequest, useApi } from "..";
import {
  DefaultApi,
  MovieUpcomingList200Response,
  MovieUpcomingListRequest,
} from "../../api";

type Params = MovieUpcomingListRequest;

type ApiResponse = MovieUpcomingList200Response;

const getCacheKey = (params: Params) =>
  createCacheKey(QUERY_KEY.upcomingMovies, params);

const useFetch = (params: Params) => {
  const api = useApi(DefaultApi);
  return () => makeRequest(api.movieUpcomingList(params));
};

export const useUpcomingMovies = (
  params: Params,
  options?: UseQueryOptions<ApiResponse, Error>
) => {
  const fetchData = useFetch(params);
  return useQuery<ApiResponse, Error>(getCacheKey(params), fetchData, options);
};