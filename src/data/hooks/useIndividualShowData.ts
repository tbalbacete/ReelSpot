import { useSuspenseQuery } from "@tanstack/react-query";
import {
  CustomQueryOptions,
  QUERY_KEY,
  createCacheKey,
  makeRequest,
  useApi,
} from "@/data";
import {
  DefaultApi,
  TvSeriesDetails200Response,
  TvSeriesDetailsRequest,
} from "@/api";

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
  options?: CustomQueryOptions<ApiResponse, Error>
) => {
  const fetchData = useFetch(params);
  return useSuspenseQuery<ApiResponse, Error>({
    queryKey: getCacheKey(params),
    queryFn: fetchData,
    ...options,
  });
};
