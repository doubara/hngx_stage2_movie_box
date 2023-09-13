import { useState, useEffect } from "react";
import poster from '../assets/poster.svg'
import MovieCard from "./MovieCard";
import Skeleton from "react-loading-skeleton";
import Loader from "./loader/Loader";
import { Hourglass } from "react-loader-spinner";

import useFetch from "./custom-hooks/useFetch";

const FeaturedMovies = (props) =>{
    // const [randomMovieData, setRandomMovieData] = useState({
    //     title: 'John Wick 3 : Parabellum',
    //     overview: 'John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.',
    //     poster_path: poster,
    //     popularity: 68.432,
    //     vote_count: 10250,
    // });
    // const [isLoading, setIsLoading] = useState(true);
    const [url, setUrl] = useState('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1')
    const [isLoading, movieData, error] = useFetch(url);
    // console.log(movieData);
    // useEffect(()=>{

    // }, [movieData])
    // useEffect(()=>{

    //     const options = {
    //         method: 'GET',
    //         headers: {
    //           accept: 'application/json',
    //           Authorization: import.meta.env.VITE_API_BEARER_TOKEN
    //         }
    //       };
          
    //       fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response)
    //             setMovieData(response.results.slice(0, 10))
    //             setIsLoading(false);
    //         })
    //         .catch(err => console.error(err));
    // }, [])
    return (
        <div className='text-black px-16 py-16 border-black'>
            <h2 className='text-4xl pb-4 font-bold'>Feature Movies</h2>
            <div className='min-h-screen
            customGrid gap-16'>
            {!isLoading ? (movieData?.results.slice(0,10).map((movie, index) =>{
                return <MovieCard movie={movie} title={index} key={index*Math.random()*210*Math.random()*197} />
            })) : (<Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#306cce', '#72a1ed']}
          />)}
            </div>
            
        </div>
    )
};

export default FeaturedMovies;