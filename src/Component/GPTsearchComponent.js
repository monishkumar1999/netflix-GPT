
import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMoviesuggestion from './GptMoviesuggestion';



const GPTsearchComponent = () => {
    return (
        <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg')] bg-cover bg-no-repeat bg-center h-screen ">
           <GptSearchBar/>
           <GptMoviesuggestion/>
        </div>
    );
};




export default GPTsearchComponent;
