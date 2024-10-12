import React from "react";
import Videotilte from "./Videotilte";
import { useSelector } from "react-redux";
import VideoBAckground from "./VideoBAckground";

const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[Math.floor(Math.random() * 20)];

  const { original_title, overview, id } = mainMovie;
  // console.log(mainMovie)
  return (
    <div>
      <Videotilte original_title={original_title} overview={overview} />
      <VideoBAckground movieId={id} />
    </div>
  );
};

export default Maincontainer;
