import { Box, Button, Group, TextInput, Image, Card, Flex } from "@mantine/core";
import React, { useState } from "react";
import { useMovieSearchData } from "../../data/hooks/useMovieSearchData";
import { useForm } from "@mantine/form";
import { Movie } from "../Home/Home";

export const Search: React.FC = () => {
  const [searchString, setSearchString] = useState<string | undefined>(undefined);
  const searchQuery = useMovieSearchData({ query: searchString, includeAdult: false, language: "en-US", page: 1 }, { suspense: false, enabled: Boolean(searchString) });

  const form = useForm({
    initialValues: {
      searchString: ""
    },

  });

  const movies: Movie[] = searchQuery.data?.results ?? [];

  console.log(movies);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "5rem 1rem", gap: "2rem" }}>
      <Box>
        <form onSubmit={form.onSubmit((values) => setSearchString(values.searchString))}>
          <Flex gap="md">
            <TextInput sx={{ width: "20rem" }} placeholder="Movie name..." {...form.getInputProps("searchString")} />
            <Button sx={{ backgroundColor: "#00506E" }} type="submit">Submit</Button>
          </Flex>
        </form>
      </Box>

      <Group position="center" spacing="md">
        {movies.map(({ poster_path }) => {
          return <Image key={poster_path} withPlaceholder maw={140} height={220} src={`https://image.tmdb.org/t/p/original/${poster_path}`} onClick={(e) => e.stopPropagation()} />
        })}
      </Group>
    </Box>
  )
}