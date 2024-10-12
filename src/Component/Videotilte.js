import React from "react";
const Videotilte = ({ original_title, overview }) => {
  // console.log(original_title);
  return (
    <div className="pt-20 px-20 pt-[15%]  absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-5xl font-bold text-white">{original_title}</h1>

      <p className="text-lg pt-4 w-1/4 text-white">{overview}</p>

      <div className="flex gap-2 mt-3">
        <button className="bg-white m-1 p-3 text-black px-10 text-lg  rounded-lg"> Play</button>
        <button className="bg-slate-600 m-1 p-3 text-white px-10 text-lg rounded-lg bg-opacity-50">More info</button>
      </div>
    </div>
  );
};

export default Videotilte;
