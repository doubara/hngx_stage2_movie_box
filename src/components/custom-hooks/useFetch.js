import { useEffect, useState } from "react";


const useFetch = (endpoint)=>{
    const [movieData, setMovieData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

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
                if (response.results.length === 0){
                    throw new Error('No Movies to show');
                    setIsLoading(false);
                }
                setMovieData(response);
                setIsLoading(false);
            })
            .catch(err =>{
                setError(true);
                setIsLoading(true);
            });    
    }, [endpoint])
    return [isLoading, movieData, error];
}

export default useFetch;