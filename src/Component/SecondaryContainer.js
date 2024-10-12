import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movies);

  // console.log(movie)
  return (
    <div className=" bg-black">

      <div className="-mt-56 pl-12 relative z-10">
      <MovieList title={"Now Playing Movie"} movie={movie.nowPlayingMovies} />
      <MovieList title={"Popular Video"} movie={movie.popularMovies} />
      <MovieList title={"Top Rated Movie"} movie={movie.topRated} />
      <MovieList title={"Upcomming Movie"} movie={movie.upcomming} />
      <MovieList title={"Now Playing Movie"} movie={movie.nowPlayingMovies} />
      </div>
     
    </div>
  );
};

export default SecondaryContainer;
