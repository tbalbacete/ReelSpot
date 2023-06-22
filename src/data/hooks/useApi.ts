import { BaseAPI, Configuration } from "@/api";

type ApiConstructor<T extends BaseAPI> = new (config: Configuration) => T;

export function useApi<T extends BaseAPI>(api: ApiConstructor<T>) {
  const apiKey =
    process.env.REACT_APP_API_KEY ?? import.meta.env.REACT_APP_API_KEY;
  return new api(
    new Configuration({
      basePath: "https://api.themoviedb.org",
      headers: {
        ["Authorization"]: `Bearer ${apiKey}`,
      },
      middleware: [],
    })
  );
}
