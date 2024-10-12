
import { GET_API } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import {addNowPopularMovies, addTopMovie } from "../Utils/Movieslice";
import { useEffect } from "react";

const useTopRatedMoive=()=>{
    const dispatch = useDispatch();

    useEffect(() => {
      
      const getNowPlayingMovies = async () => {
        try {
          const response = await fetch(
           'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', 
            GET_API
          );
    
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
    
          const dataJson = await response.json();
    
          // Correct the API response key
          dispatch(addTopMovie(dataJson.results));
          //  console.log(dataJson);
          
        } catch (error) {
          console.error("Fetching movies failed: ", error);
        }
      };
    
      getNowPlayingMovies();

    }, [dispatch]);
  
  
}


export default useTopRatedMoive;