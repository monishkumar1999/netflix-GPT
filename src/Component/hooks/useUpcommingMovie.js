
import { GET_API } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import {addNowPopularMovies, addUpcommingMovie } from "../Utils/Movieslice";
import { useEffect } from "react";

const useUpcommingMoive=()=>{
    const dispatch = useDispatch();

    useEffect(() => {
      
      const getNowPlayingMovies = async () => {
        try {
          const response = await fetch(
          'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', 
            GET_API
          );
    
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
    
          const dataJson = await response.json();
    
          console.log(dataJson);
          // Correct the API response key
          dispatch(addUpcommingMovie(dataJson.results));
          //  console.log(dataJson);
          
        } catch (error) {
          console.error("Fetching movies failed: ", error);
        }
      };
    
      getNowPlayingMovies();

    }, [dispatch]);
  
  
}


export default useUpcommingMoive;