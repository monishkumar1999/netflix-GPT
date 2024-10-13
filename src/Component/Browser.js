
import { useSelector } from "react-redux";
import Header from "./Header";
import useFetchNowplayingMoive from "./hooks/useFetchmovie";
import Maincontainer from "./Maincontainer";
import useFetchPopularMoive from "./hooks/usePopularMovie";
import useTopRatedMoive from "./hooks/useTopradtedMovie";
import useUpcommingMoive from "./hooks/useUpcommingMovie";
import GPTsearchComponent from "./GPTsearchComponent";



function Browser() {


  useFetchNowplayingMoive()
  useFetchPopularMoive();
  useTopRatedMoive();
  useUpcommingMoive();

const {showGptSearch}=  useSelector((store)=>store.gpt)
  // console.log(showGptSearch)  
  return (
    <div>
      <Header />
      {
        showGptSearch?<GPTsearchComponent/>
        : <Maincontainer />
    
      }
    </div>
  );
}

export default Browser;
