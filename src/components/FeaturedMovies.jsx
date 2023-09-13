import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

const FeaturedMovies = (props) =>{
    const [movieData, setMovieData] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWE5YzRkZDA5YmZhYmNjMTAzMTRiOGI1YTU5YTViNCIsInN1YiI6IjY0ZmYxODIwZGI0ZWQ2MTAzMmE2Y2M3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1El547BOzXtxmlszJAjvkLC-81h_bSObXhevpDnjV2A'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovieData(response.results.slice(0, 10))
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }, [])
    return (
        <div className='text-black px-16 py-16 border-black'>
            <h2 className='text-4xl pb-4 font-bold'>Feature Movies</h2>
            <div className='grid gap-16 grid-cols-4'>
            {!isLoading && movieData.map((movie, index) =>{
                return <MovieCard movie={movie} title={index} key={index*Math.random()*210*Math.random()*197} />
            })}
            </div>
            
        </div>
    )
};

export default FeaturedMovies;