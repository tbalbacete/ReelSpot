import { AspectRatio, BackgroundImage, Badge, Box, Button, Flex, Image, Modal, RingProgress, Text, Title } from "@mantine/core";
import { Play } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";
import { Genre } from "@/pages/Home/Home";
import { useMovieCredits, useMovieDetails, useMovieReleases, useMovieVideos } from "@/data";
import dayjs from "dayjs";
import { getRatingColor } from "@/utils";
import { useDisclosure } from "@mantine/hooks";

type MovieDetails = {
  backdropPath?: string;
  genres?: Genre[];
  posterPath?: string;
  releaseDate?: string;
  tagline?: string;
  title?: string;
  voteAverage?: number;
  overview?: string;
};

type CrewMember = {
  name: string;
  job: string;
};

type Video = {
  key: string;
  type: string;
};

type Country = {
  iso_3166_1: string;
  release_dates: Release[];
}

type Release = {
  certification: string;
}

export const IndividualMovie: React.FC = () => {
  const { movieId } = useParams();
  const movieQuery = useMovieDetails({ movieId });
  const movieCreditsQuery = useMovieCredits({ movieId });
  const movieVideosQuery = useMovieVideos({ movieId });
  const movieReleasesQuery = useMovieReleases({ movieId });
  const [opened, { open, close }] = useDisclosure(false);

  const { backdropPath, genres, posterPath, releaseDate, tagline, title, voteAverage, overview }: MovieDetails = movieQuery.data ?? {};
  const crew: CrewMember[] = movieCreditsQuery?.data?.crew;
  const trailer: Video = movieVideosQuery.data?.results.find((video: Video) => video.type === "Trailer");

  const director = crew.find((crewmember) =>
    crewmember.job === "Director");

  const rating = movieReleasesQuery.data?.results.find((country: Country) => country.iso_3166_1 === "US")?.release_dates?.find((release: Release) => release.certification !== "")?.certification ?? "";

  const formatGenres = (genres: Genre[] | undefined) => {
    if (!genres) return ""
    const array: string[] = [];
    genres.map((genre) => {
      array.push(genre.name);
    });

    return array.join(", ")
  }

  return (
    <Box>
      {trailer && <Modal sx={{ ".mantine-Modal-body": { padding: 0 } }} opened={opened} onClose={close} centered withCloseButton={false} size="70%">
        <AspectRatio ratio={16 / 9}>
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      </Modal>}
      <Box>
        <BackgroundImage sx={{ height: "40rem" }} maw="100%" src={`https://image.tmdb.org/t/p/original/${backdropPath}`}>
          <Box sx={{ display: "flex", position: "relative", height: "100%", width: "100%", background: "linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%)" }}>
            <Box sx={{ display: "flex", padding: "5rem", flexDirection: "column" }}>
              <Image height="30rem" width="20rem" src={`https://image.tmdb.org/t/p/original/${posterPath}`} />
              <Box sx={{ padding: "0.25rem", backgroundColor: "#0d253f", width: "20rem", borderRadius: "0px 0px 2px 2px", textAlign: "center" }}>
                <Text color="lightgrey">Now Streaming</Text>
                <Text color="white">Watch Now</Text>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", paddingTop: "12rem", color: "white", gap: "1rem" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Flex gap="0.5rem">
                  <Title order={1}>{title}</Title>
                  <Title sx={{ color: "lightgrey", fontWeight: 400 }} order={1}>{`(${dayjs(releaseDate).format("YYYY")})`}</Title>
                </Flex>
                <Flex gap="xs">
                  {rating && <Badge sx={{ padding: "0.25rem" }} color="gray" size="lg" radius="xs" variant="outline">{rating}</Badge>}
                  <Text>{formatGenres(genres)}</Text>
                </Flex>
              </Box>
              <Flex align="center" gap="1rem">
                <Flex align="center">
                  <RingProgress
                    size={70}
                    thickness={8}
                    sections={[
                      {
                        value: (voteAverage ?? 0) * 10,
                        color: getRatingColor(voteAverage ?? 0),
                      },
                    ]}
                    label={
                      <Text
                        color={getRatingColor(voteAverage ?? 0)}
                        weight={700}
                        align="center"
                        size="xs"
                      >
                        {Math.round((voteAverage ?? 0) * 10)}%
                      </Text>
                    }
                  />
                  <Flex direction="column">
                    <Text sx={{ lineHeight: 1.25 }} fz="lg">User</Text>
                    <Text sx={{ lineHeight: 1.25 }} fz="lg">Score</Text>
                  </Flex>
                </Flex>
                {trailer && <Button onClick={open} sx={{ "&:hover": { backgroundColor: "transparent", color: "darkgray" } }} leftIcon={<Play size={20} />} variant="subtle" color="gray">
                  Play Trailer
                </Button>}
              </Flex>
              <Box>
                <Text sx={{ letterSpacing: 0.10 }} color="lightgrey" fz="lg" fs="italic">{tagline}</Text>
              </Box>
              <Flex direction="column" gap="0.5rem">
                <Text fz="xl" fw={500}>Overview</Text>
                <Text fz="md" >{overview}</Text>
              </Flex>
              {director && <Flex direction="column">
                <Text sx={{ lineHeight: 1.25 }} fz="md" fw={500}>{director?.name} </Text>
                <Text sx={{ lineHeight: 1.25 }} fz="sm">Director</Text>
              </Flex>}
            </Box>
          </Box>
        </BackgroundImage>
      </Box >
    </Box >
  )
}