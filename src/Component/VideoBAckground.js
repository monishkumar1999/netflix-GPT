import React, { useEffect, useState } from "react";
import { GET_API } from "./Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerMovie } from "./Utils/Movieslice";
import useTrailerVideo from "./hooks/useTrailerVideo";

const VideoBAckground = ({ movieId }) => {
 const  trailerKey= useTrailerVideo(movieId)

  return (
    <div className="" >
      <iframe className="w-screen aspect-video"
         src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1&playlist=${trailerKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
};

export default VideoBAckground;
