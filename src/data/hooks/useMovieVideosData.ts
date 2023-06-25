import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { QUERY_KEY, createCacheKey, makeRequest, useApi } from "@/data";
import { DefaultApi, MovieVideos200Response, MovieVideosRequest, TvSeriesDetails200Response, TvSeriesDetailsRequest } from "@/api";

type Params = MovieVideosRequest;

type ApiResponse = MovieVideos200Response;

const getCacheKey = (params: Params) =>
  createCacheKey(QUERY_KEY.movieVideos, params);

const useFetch = (params: Params) => {
  const api = useApi(DefaultApi);
  return () => makeRequest(api.movieVideos(params));
};

export const useMovieVideos = (
  params: Params,
  options?: UseQueryOptions<ApiResponse, Error>
) => {
  const fetchData = useFetch(params);
  return useQuery<ApiResponse, Error>(getCacheKey(params), fetchData, options);
};