import { Box, Title, Image, Stack, RingProgress, Text } from "@mantine/core";
import { usePopularMoviesData } from "../data/hooks/usePopularMoviesData";
import { Popcorn } from "@phosphor-icons/react";
import { Carousel } from "@mantine/carousel";

type Movie = {
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
};

const getRatingColor = (average: number) => {
  if (average > 7.5) return "green";
  if (average > 5.0) return "yellow"; //
  return "red";
}

export const Home = () => {
  const popularMoviesQuery = usePopularMoviesData(
    {
      language: "en",
      page: "1",
    },
  );

  console.log(popularMoviesQuery.data?.results)

  const popularMovies: Movie[] = popularMoviesQuery.data?.results;

  return (
    <Box sx={{ color: "white", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", padding: "1rem", gap: "0.5em", backgroundColor: "#00506E" }}>
        <Title order={1}>ReelSpot</Title>
        <Popcorn size={32} />
      </Box>
      <Stack spacing={"xl"} sx={{ padding: "1rem" }}>
        <Box>
          <Title sx={{ paddingBottom: "0.5rem" }} order={5}>CURRENTLY TRENDING</Title>
          <Carousel slideSize={"20rem"} slideGap={"lg"} align="start" slidesToScroll={"auto"} dragFree>
            {popularMovies.map(({ title, poster_path, vote_average }) => {
              return (
                <Carousel.Slide key={title}>
                  <Image src={`https://image.tmdb.org/t/p/original/${poster_path}`} onClick={(e) => e.stopPropagation()} />
                  <RingProgress
                    sx={{ top: -40 }}
                    size={70}
                    thickness={8}
                    sections={[{ value: vote_average * 10, color: getRatingColor(vote_average) }]}
                    label={
                      <Text color={getRatingColor(vote_average)} weight={700} align="center" size="xs">
                        {vote_average * 10}%
                      </Text>
                    }
                  />
                </Carousel.Slide>
              );
            })}

          </Carousel>

        </Box>
      </Stack>
    </Box>
  );
};
