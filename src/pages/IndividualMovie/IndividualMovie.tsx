import { BackgroundImage, Badge, Box, Button, Flex, Image, RingProgress, Text, Title } from "@mantine/core";
import { Play } from "@phosphor-icons/react";
import { useParams } from "react-router-dom"

export const IndividualMovie: React.FC = () => {
  const { movieId } = useParams();
  return (
    <Box>
      <Box>
        <BackgroundImage sx={{ height: "40rem" }} maw="100%" src="https://image.tmdb.org/t/p/original/e2Jd0sYMCe6qvMbswGQbM0Mzxt0.jpg">
          <Box sx={{ display: "flex", position: "relative", height: "100%", width: "100%", background: "linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%)" }}>
            <Box sx={{ display: "flex", padding: "5rem", flexDirection: "column" }}>
              <Image height="30rem" width="20rem" src="https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg" />
              <Box sx={{ padding: "0.25rem", backgroundColor: "#0d253f", width: "20rem", borderRadius: "0px 0px 2px 2px", textAlign: "center" }}>
                <Text color="lightgrey">Now Streaming</Text>
                <Text color="white">Watch Now</Text>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", paddingTop: "12rem", color: "white", gap: "1rem" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Flex gap="0.5rem">
                  <Title order={1}>Fast X</Title>
                  <Title sx={{ color: "lightgrey", fontWeight: 400 }} order={1}>(2023)</Title>
                </Flex>
                <Flex gap="xs">
                  <Badge sx={{ padding: "0.25rem" }} color="gray" size="lg" radius="xs" variant="outline">TV-14</Badge>
                  <Text>Action & Adventure, Drama, Sci-Fi & Fantasy</Text>
                </Flex>
              </Box>
              <Flex align="center" gap="1rem">
                <Flex align="center">
                  <RingProgress
                    size={70}
                    thickness={8}
                    sections={[
                      {
                        value: 79,
                        color: "green",
                      },
                    ]}
                    label={
                      <Text
                        color="green"
                        weight={700}
                        align="center"
                        size="xs"
                      >
                        79%
                      </Text>
                    }
                  />
                  <Flex direction="column">
                    <Text sx={{ lineHeight: 1.25 }} fz="lg">User</Text>
                    <Text sx={{ lineHeight: 1.25 }} fz="lg">Score</Text>
                  </Flex>
                </Flex>
                <Button sx={{ "&:hover": { backgroundColor: "transparent", color: "darkgray" } }} leftIcon={<Play size={20} />} variant="subtle" color="gray">
                  Play Trailer
                </Button>
              </Flex>
              <Box>
                <Text sx={{ letterSpacing: 0.10 }} color="lightgrey" fz="lg" fs="italic">Who do you trust?</Text>
              </Box>
              <Flex direction="column" gap="0.5rem">
                <Text fz="xl" fw={500}>Overview</Text>
                <Text fz="md" >Nick Fury and Talos discover a faction of shapeshifting Skrulls who have been infiltrating Earth for years.
                </Text>
              </Flex>
              <Flex direction="column">
                <Text sx={{ lineHeight: 1.25 }} fz="md" fw={500}>Kyle Bradstreet</Text>
                <Text sx={{ lineHeight: 1.25 }} fz="md">Creator</Text>
              </Flex>
            </Box>
          </Box>
        </BackgroundImage>
      </Box >
    </Box >
  )
}