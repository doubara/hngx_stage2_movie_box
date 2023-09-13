import { useEffect, useState } from "react";


const useFetch = (endpoint)=>{
    const [movieData, setMovieData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(undefined);

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
                Authorization: `${import.meta.env.VITE_API_BEARER_TOKEN}`
            }
          };
          
        fetch(endpoint, options)
            .then(response => response.json())
            .then(response => {
                setMovieData(response);
                setIsLoading(false);
            })
            .catch(err =>{
                setError(err.message);
                setIsLoading(false);
            });    
    }, [endpoint])
    return [isLoading, movieData, error];
}

export default useFetch;