import { useState } from "react";

import Navigation from "../components/Navigation";
import MovieDetailsCard from "../components/MovieDetailsCard";
import { Hourglass } from "react-loader-spinner";
// custom hook import
import useFetch from '../components/custom-hooks/useFetch';

import ErrorPage from "../components/ErrorPage";
import { useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";

const Movies = (props)=>{

    const paramsId = useParams().id;

    const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/${paramsId}?api_key=${import.meta.env.VITE_API_KEY}`);
    
    const [isLoading, movieData, error] = useFetch(url);
    
    return <section className="flex md:block items-stretch min-h-screen border brder-red-600">
        <div className="min-h-screen basis-1/4 h-full border md:basis-1 md:min-h-0 md:h-auto">
            <Navigation />
        </div>
        <div className="basis-3/4 min-h-screen border md:basis-1 ">
            {!isLoading && <MovieDetailsCard movie={movieData} />} 
        </div>
        {error && <ErrorPage />}
        {isLoading && <Loader/>}
    </section>
}

export default Movies;