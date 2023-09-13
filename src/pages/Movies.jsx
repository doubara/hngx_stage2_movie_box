import { useEffect, useState } from "react";

import Navigation from "../components/Navigation";
import MovieDetailsCard from "../components/MovieDetailsCard";
import { useParams } from "react-router-dom";

const Movies = (props)=>{
    const [movieData, setMovieData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const paramsId = useParams().id
    console.log(paramsId);

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWE5YzRkZDA5YmZhYmNjMTAzMTRiOGI1YTU5YTViNCIsInN1YiI6IjY0ZmYxODIwZGI0ZWQ2MTAzMmE2Y2M3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1El547BOzXtxmlszJAjvkLC-81h_bSObXhevpDnjV2A'
            }
          };
          
          Boolean(paramsId) && fetch(`https://api.themoviedb.org/3/movie/${paramsId}?api_key=85a9c4dd09bfabcc10314b8b5a59a5b4`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovieData(response);
                setIsLoading(false);
            })
            .catch(err => console.error(err));    
    }, [props.id])


    return <section className="flex items-stretch min-h-screen border brder-red-600">
        <div className="min-h-screen basis-1/4 h-full border">
            <Navigation />
        </div>
        <div className="basis-3/4 min-h-screen border">
            {!isLoading && <MovieDetailsCard movie={movieData} />}
        </div>
    </section>
}

export default Movies;