import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../components/custom-hooks/useFetch";
import MovieGrid from "../components/MovieGrid";
import Loader from "../components/loader/Loader";
import ErrorPage from "../components/ErrorPage";

const SearchMovie = (props) => {
  const searchParams = useParams().id;
  const navigate = useNavigate();
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/search/movie?query=${searchParams}`
  );

  const [isLoading, movieData, error] = useFetch(url);

  return (
    <div className="w-full h-auto text-black">
      <div className="flex items-center my-6 px-8 pb-4 border-b">
        <p className="text-xl">Search Results</p>

        <button
          onClick={() => {
            navigate("/");
          }}
          className="ml-auto bg-red-600 text-white px-4 py-3 rounded-lg text-md"
        >
          Go Back home
        </button>
      </div>

      <div>
        {!isLoading && !error.status && (
          <MovieGrid
            className="grid-cols-3"
            movies={movieData.results}
          ></MovieGrid>
        )}
      </div>
      {isLoading && <Loader />}
      {error.status && <ErrorPage error={error.error} />}
    </div>
  );
};

export default SearchMovie;
