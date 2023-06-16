import { BaseAPI, Configuration } from "../../api";

type ApiConstructor<T extends BaseAPI> = new (config: Configuration) => T;

export function useApi<T extends BaseAPI>(api: ApiConstructor<T>) {
  return new api(
    new Configuration({
      basePath: "https://api.themoviedb.org",
      headers: {
        ["Authorization"]: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2Y2ZjY5YTFlMDc5M2JlZjU0ZTU3Y2IyNTdiNzlhNSIsInN1YiI6IjY0OGI5ZDhmYzJmZjNkMDBmZmI5ZDI1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-eJCls7YABnNcNOj2czlQPT7KRsfkw6W7LIDRLWK3GU`,
      },
      middleware: [],
    })
  );
}
