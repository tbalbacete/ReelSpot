import {
  Box,
  Title,
  Image,
  Stack,
  RingProgress,
  Text,
  Badge,
  Flex,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import React from "react";
import {
  useIndividualShowDetails,
  usePopularMovies,
  useUpcomingMovies,
} from "@/data";
import { useRouter } from "@/hooks";
import { getRatingColor } from "@/utils";
import { usePopularShowData } from "@/data/hooks/usePopularShowData";

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
};

export type Genre = {
  id: number;
  name: string;
};

type TVShow = {
  id?: number;
  name?: string;
  backdropPath?: string;
  overview?: string;
  genres?: Genre[];
  origin_country?: string[];
};

export const Home: React.FC = () => {
  const { routes } = useRouter();
  const popularMoviesQuery = usePopularMovies({
    language: "en",
    page: "1",
  });

  const upcomingMoviesQuery = useUpcomingMovies({
    language: "en-US",
    page: "1",
    region: "US",
  });

  const popularShow = (
    usePopularShowData({ language: "en-US", page: "1" }).data
      ?.results as TVShow[]
  ).find((show) => show.origin_country?.includes("US"));

  const tvShowQuery = useIndividualShowDetails(
    { seriesId: popularShow?.id },
    { enabled: Boolean(popularShow) }
  );

  const popularMovies: Movie[] = popularMoviesQuery.data?.results;
  const upcomingMovies: Movie[] = upcomingMoviesQuery.data?.results;
  const tvShow: TVShow = tvShowQuery.data ?? {};

  return (
    <Box sx={{ color: "white" }}>
      <Stack spacing={"xl"} sx={{ padding: "1.5rem" }}>
        <Box>
          <Title sx={{ paddingBottom: "0.5rem" }} order={5}>
            CURRENTLY TRENDING
          </Title>
          <Carousel
            slideSize={"20rem"}
            slideGap={"lg"}
            align="start"
            slidesToScroll={"auto"}
            dragFree
          >
            {popularMovies.map(({ id, poster_path, title, vote_average }) => {
              return (
                <Carousel.Slide key={id}>
                  <Image
                    sx={{ "&:hover": { cursor: "pointer", opacity: 0.75 } }}
                    src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      routes.individualMovie.go({ movieId: id.toString() });
                    }}
                    withPlaceholder
                    placeholder={
                      <Text sx={{ height: "100%" }} align="center">
                        {title}
                      </Text>
                    }
                  />
                  <RingProgress
                    sx={{ top: -40 }}
                    size={70}
                    thickness={8}
                    sections={[
                      {
                        value: vote_average * 10,
                        color: getRatingColor(vote_average),
                      },
                    ]}
                    label={
                      <Text
                        color={getRatingColor(vote_average)}
                        weight={700}
                        align="center"
                        size="xs"
                      >
                        {Math.round(vote_average * 10)}%
                      </Text>
                    }
                  />
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </Box>
        <Box>
          <Title sx={{ paddingBottom: "0.5rem" }} order={5}>
            UPCOMING TITLES
          </Title>
          <Carousel
            slideSize={"10rem"}
            slideGap={"md"}
            align="start"
            slidesToScroll={"auto"}
            dragFree
            withControls={false}
          >
            {upcomingMovies.map(({ id, title, poster_path }) => {
              return (
                <Carousel.Slide key={id}>
                  <Image
                    height="13.5rem"
                    sx={{
                      "&:hover": { cursor: "pointer", opacity: 0.75 },
                    }}
                    src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      routes.individualMovie.go({ movieId: id.toString() });
                    }}
                    withPlaceholder
                    placeholder={
                      <Text sx={{}} align="center">
                        {title}
                      </Text>
                    }
                  />
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </Box>
        {tvShow && (
          <Flex direction="column" gap="sm">
            <Title sx={{}} order={5}>
              NEW IN TV
            </Title>
            <Box sx={{ position: "relative" }}>
              <Image
                src={`https://image.tmdb.org/t/p/original/${tvShow.backdropPath}`}
                height="40rem"
                onClick={(e) => e.stopPropagation()}
              />
              <Title sx={{ position: "absolute", bottom: 0, left: 15 }}>
                {tvShow.name}
              </Title>
            </Box>
            <Text fz="md">{tvShow.overview}</Text>
            <Flex gap="md">
              {tvShow.genres?.map(({ id, name }) => {
                return (
                  <Badge key={id} color="gray" radius="xs" size="xl">
                    {name}
                  </Badge>
                );
              })}
            </Flex>
          </Flex>
        )}
      </Stack>
    </Box>
  );
};
