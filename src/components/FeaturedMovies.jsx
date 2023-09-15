import { useState } from "react";
import ErrorPage from "./ErrorPage";
import useFetch from "./custom-hooks/useFetch";
import MovieGrid from "./MovieGrid";
import { Hourglass } from "react-loader-spinner";

const FeaturedMovies = (props) => {
  // const [url, setUrl] = useState()
  const [isLoading, movieData, error] = useFetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
  );
  return (
    <div className="text-black px-16 py-16 border-black">
      <h2 className="text-4xl pb-4 font-bold">Feature Movies</h2>
      <div>
        {isLoading && (
          <div className="grid place-content-center h-80 border text-center">
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={["#306cce", "#72a1ed"]}
            />
          </div>
        )}
        {!isLoading && !error.status && <MovieGrid movies={movieData?.results} />}
        {error.status && <ErrorPage error={error.error} />}
      </div>
    </div>
  );
};

export default FeaturedMovies;
