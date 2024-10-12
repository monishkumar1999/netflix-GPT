import { useEffect } from "react";
import { addTrailerMovie } from "../Utils/Movieslice";
import { GET_API } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.movies?.trailerVideo);

 
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      GET_API
    );

    const json = await data.json(data);

    const FilterDatatrailer = json.results.filter(
      (video) => video.type == "Trailer"
    );
    const trailer =
      FilterDatatrailer.length != 0 ? FilterDatatrailer[0] : json.results[0];

    dispatch(addTrailerMovie(trailer.key));
    // console.log(trailer);
  };

  // console.log(trailer)
  useEffect(() => {
    getMovieTrailer();
  }, []);

  // if(!trailerId){
  //   return
  // }
  return selector;
};

export default useTrailerVideo;
