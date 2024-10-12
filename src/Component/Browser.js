
import { useSelector } from "react-redux";
import Header from "./Header";
import useFetchNowplayingMoive from "./hooks/useFetchmovie";
import Maincontainer from "./Maincontainer";
import useFetchPopularMoive from "./hooks/usePopularMovie";
import useTopRatedMoive from "./hooks/useTopradtedMovie";
import useUpcommingMoive from "./hooks/useUpcommingMovie";



function Browser() {


  useFetchNowplayingMoive()
  useFetchPopularMoive();
  useTopRatedMoive();
  useUpcommingMoive();
  // console.log(movies)  
  return (
    <div>
      <Header />
      <Maincontainer />
    </div>
  );
}

export default Browser;
