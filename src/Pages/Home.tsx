import { Box, Title } from "@mantine/core";
import { usePopularMoviesData } from "../data/hooks/usePopularMoviesData";
import { Popcorn } from "@phosphor-icons/react";

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
  );

  const popularMovies: Movie[] = popularMoviesQuery.data?.results;

  return (
    <Box sx={{ color: "white", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", padding: "1rem", gap: "0.5em" }}>
        <Title order={1}>ReelSpot</Title>
        <Popcorn size={32} />
      </Box>
      {popularMovies.map((movie) => {
        return (
          <img
            src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
          ></img>
        );
      })}
    </Box>
  );
};
