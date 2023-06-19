import { Box, Title, Image, Stack, RingProgress, Text } from "@mantine/core";
import { Popcorn } from "@phosphor-icons/react";
import { Carousel } from "@mantine/carousel";
import { usePopularMoviesData } from "../../data";
import React from "react";

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

export const Home: React.FC = () => {
  const popularMoviesQuery = usePopularMoviesData(
    {
      language: "en",
      page: "1",
    },
  );

  console.log(popularMoviesQuery.data?.results)

  const popularMovies: Movie[] = popularMoviesQuery.data?.results;

  return (
    <Box sx={{ color: "white" }}>
      <Stack spacing={"xl"} sx={{ padding: "1.5rem" }}>
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
