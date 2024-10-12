import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {
  return (
    <div className="">
      <h1 className="font-bold text-3xl py-6 text-white">{title}</h1>
      <div
        className="flex overflow-x-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-5" style={{ scrollbarWidth: 'none' }}>
          {movie?.map((movies) => {
            return <MovieCard key={movies.id} posterPath={movies.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
