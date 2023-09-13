import { useEffect, useState } from "react";

import Navigation from "../components/Navigation";
import MovieDetailsCard from "../components/MovieDetailsCard";
import { Hourglass } from "react-loader-spinner";
// custom hook import
import useFetch from '../components/custom-hooks/useFetch';

import { useParams } from "react-router-dom";

const Movies = (props)=>{
    // const [movieData, setMovieData] = useState();
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(undefined);
    const paramsId = useParams().id;

    const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/${paramsId}?api_key=${import.meta.env.VITE_API_KEY}`);
    
    console.log(paramsId);
    
    const [isLoading, movieData, error] = useFetch(url);
    
    console.log(isLoading);

    useEffect(()=>{
        // const options = {
        //     method: 'GET',
        //     headers: {
        //       accept: 'application/json',
        //         Authorization: `${import.meta.env.VITE_API_BEARER_TOKEN}`
        //     }
        //   };
          
        //   Boolean(paramsId) && fetch(`https://api.themoviedb.org/3/movie/${paramsId}?api_key=${import.meta.env.VITE_API_KEY}`, options)
        //     .then(response => response.json())
        //     .then(response => {
        //         console.log(response)
        //         setMovieData(response);
        //         setIsLoading(false);
        //     })
        //     .catch(err => console.error(err));

            // trying out our custom hook
            

            // console.log(movieData)

    }, [props.id])


    return <section className="flex md:block items-stretch min-h-screen border brder-red-600">
        <div className="min-h-screen basis-1/4 h-full border md:basis-1 md:min-h-0 md:h-auto">
            <Navigation />
        </div>
        <div className="basis-3/4 min-h-screen border md:basis-1 ">
            {!isLoading ? <MovieDetailsCard movie={movieData} /> : <Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
/>}
        </div>
    </section>
}

export default Movies;