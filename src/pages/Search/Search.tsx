import { Box, Button, Group, TextInput, Image, Flex } from "@mantine/core";
import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { Movie } from "../Home/Home";
import { useMovieSearch } from "@/data";
import { useRouter } from "@/hooks";

export const Search: React.FC = () => {
  const { routes } = useRouter();
  const [searchString, setSearchString] = useState<string | undefined>(
    undefined
  );
  const searchQuery = useMovieSearch(
    { query: searchString, includeAdult: false, language: "en-US", page: 1 },
    { enabled: Boolean(searchString) }
  );

  const form = useForm({
    initialValues: {
      searchString: "",
    },
  });

  const movies: Movie[] = searchQuery.data?.results ?? [];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "5rem 1rem",
        gap: "2rem",
      }}
    >
      <Box>
        <form
          onSubmit={form.onSubmit((values) =>
            setSearchString(values.searchString)
          )}
        >
          <Flex gap="md">
            <TextInput
              sx={{ width: "20rem" }}
              placeholder="Movie name..."
              {...form.getInputProps("searchString")}
            />
            <Button sx={{ backgroundColor: "#00506E" }} type="submit">
              Submit
            </Button>
          </Flex>
        </form>
      </Box>

      <Group position="center" spacing="md">
        {movies.map(({ poster_path, id }) => {
          return (
            <Image
              sx={{ "&:hover": { cursor: "pointer", opacity: 0.75 } }}
              onClick={(e) => {
                e.stopPropagation();
                routes.individualMovie.go({ movieId: id.toString() });
              }}
              key={id}
              withPlaceholder
              maw={140}
              height={220}
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            />
          );
        })}
      </Group>
    </Box>
  );
};
