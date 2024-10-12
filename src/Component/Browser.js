
import { useSelector } from "react-redux";
import Header from "./Header";
import useFetchNowplayingMoive from "./hooks/useFetchmovie";
import Maincontainer from "./Maincontainer";



function Browser() {


  useFetchNowplayingMoive()
 
  // console.log(movies)  
  return (
    <div>
      <Header />
      <Maincontainer />
    </div>
  );
}

export default Browser;
