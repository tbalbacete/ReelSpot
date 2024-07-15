import { UseQueryOptions } from "@tanstack/react-query";

export type CustomQueryOptions<T, Error> = Omit<
  UseQueryOptions<T, Error>,
  "queryKey"
>;
