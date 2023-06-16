import { MovieDb } from "moviedb-promise"
import { useState } from "react";

type Movie = {
  title: string;
  poster_path: string;
}

export const Home = () => {
  const moviedb = new MovieDb("33f6f69a1e0793bef54e57cb257b79a5");

  const [movies, setMovie] = useState<Movie[] | undefined>([]);

  moviedb
    .moviePopular({})
    .then((res) => {
      let array: Movie[] = [];
      res.results?.map(({ title, poster_path }) => {
        if (title && poster_path) {
          array.push({title, poster_path})
        }
      });
      setMovie(array);
    })
    .catch(console.error);

  return (
    <>
      {movies && movies.map((movie) => {
        return <div>{movie.title}<img src="https://image.tmdb.org/t/p/w500/"></img></div>
      })}
    </>
  )
}