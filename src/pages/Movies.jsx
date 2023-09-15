import { useState } from "react";

import Navigation from "../components/Navigation";
import MovieDetailsCard from "../components/MovieDetailsCard";
import { Hourglass } from "react-loader-spinner";
// custom hook import
import useFetch from "../components/custom-hooks/useFetch";

import ErrorPage from "../components/ErrorPage";
import { useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";

const Movies = (props) => {
  const paramsId = useParams().id;

  const [isLoading, movieData, error] = useFetch(
    `https://api.themoviedb.org/3/movie/${paramsId}?language=en-US`
  );

  console.log(isLoading, movieData, error);

  return (
    <section className="flex md:block items-stretch min-h-screen border brder-red-600">
      <div className="min-h-screen basis-1/4 h-full border md:basis-1 md:min-h-0 md:h-auto">
        <Navigation />
      </div>
      <div className="basis-3/4 min-h-screen border md:basis-1 ">
        {isLoading && <Loader />}
        {!isLoading && !error.status && <MovieDetailsCard movie={movieData} />}
      </div>
      {error.status && <ErrorPage error={error.error} />}
    </section>
  );
};

export default Movies;
