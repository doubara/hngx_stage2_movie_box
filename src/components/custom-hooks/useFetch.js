import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ status: false, error: {} });

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: 'place your endpoints bros😁',
      },
    };

    fetch(endpoint, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        // if (response?.results.length === 0) {
        //   throw new Error("No Movies to show");
        // }
        setMovieData(response);
      })
      .catch((err) => {
        setError({ status: true, error: err });
        setIsLoading(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [endpoint]);
  return [isLoading, movieData, error];
};

export default useFetch;
