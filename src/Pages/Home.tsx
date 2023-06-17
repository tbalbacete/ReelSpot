import { usePopularMoviesData } from "../data/hooks/usePopularMoviesData";

type Movie = {
  title: string;
  poster_path: string;
};

export const Home = () => {
  const popularMoviesQuery = usePopularMoviesData(
    {
      language: "en",
      page: "1",
    },
    { suspense: true }
  );

  const popularMovies: Movie[] = popularMoviesQuery.data?.results;

  return (
    <>
      {popularMovies.map((movie) => {
        return (
          <img
            src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
          ></img>
        );
      })}
    </>
  );
};
