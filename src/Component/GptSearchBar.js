import React from "react";
import lang from "./Utils/LanguageConst";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
const language=  useSelector((store)=>store.congirue.lang)

console.log(language);
  return (
    <div className=" pt-[10%] flex justify-center ">
      <form className="bg-black p-4 w-1/2 grid grid-cols-12">
        <input
          className="border-slate-950 p-3 col-span-10"
          type="text"
          name="searchInput"
          placeholder={lang[language].placeHolder}
        />
        <button className=" mx-2 py-1 px-4 bg-red-500 text-white rounded col-span-2 ">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
