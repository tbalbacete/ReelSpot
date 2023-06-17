import { BaseAPI, Configuration } from "../../api";

type ApiConstructor<T extends BaseAPI> = new (config: Configuration) => T;

export function useApi<T extends BaseAPI>(api: ApiConstructor<T>) {
  const apiKey = window.env?.REACT_APP_API_KEY;
  return new api(
    new Configuration({
      basePath: "https://api.themoviedb.org",
      headers: {
        ["Authorization"]: `Bearer ${window.env?.REACT_APP_API_KEY}`,
      },
      middleware: [],
    })
  );
}
