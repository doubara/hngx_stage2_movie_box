import { useEffect, useState } from "react";


const useFetch = (endpoint)=>{
    const [movieData, setMovieData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({status: false, error: {}});

    useEffect(()=>{
        const options = {
            method: 'GET', 
            headers: 
            {
                accept: 'application/json',
                Authorization: 'bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWE5YzRkZDA5YmZhYmNjMTAzMTRiOGI1YTU5YTViNCIsInN1YiI6IjY0ZmYxODIwZGI0ZWQ2MTAzMmE2Y2M3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1El547BOzXtxmlszJAjvkLC-81h_bSObXhevpDnjV2A'
            },

        };
        fetch(endpoint, options)
            .then(response => response.json())
            .then(response => {
                // if (response.results.length === 0){
                //     setIsLoading(false);
                //     throw new Error('No Movies to show');
                // }
                setMovieData(response);
                setIsLoading(false);
            })
            .catch(err =>{
                setError({status: true, error: err});
                setIsLoading(false);
            });    
    }, [endpoint])
    return [isLoading, movieData, error];
}

export default useFetch;