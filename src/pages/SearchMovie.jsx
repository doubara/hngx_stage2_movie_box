import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../components/custom-hooks/useFetch"
import MovieGrid from "../components/MovieGrid";
import { Hourglass } from "react-loader-spinner";
import Nav from "../components/Nav";
// import Navigation from "../components/Navigation";

const SearchMovie = (props)=>{
    const searchParams = useParams().id;
    const [url, setUrl] = useState(`https://api.themoviedb.org/3/search/movie?query=${searchParams}&api_key=${import.meta.env.VITE_API_KEY}`);
    
    const [isLoading, movieData, error] = useFetch(url);
    useEffect(()=>{
        return;
    }, [searchParams])

    return (
        <div className="w-full h-auto text-black">
            <Nav />
            <div className="flex items-center my-6 px-8 pb-4 border-b"><p className="text-xl">Search Results</p><Link path='/'  className="ml-auto bg-red-600 text-white px-4 py-3 rounded-lg text-md"> Go Back home</Link> </div>
            <div>
            {!isLoading && <MovieGrid className='grid-cols-3' movies={movieData}></MovieGrid>}
            </div>
            {isLoading && <div className="h-1/2 flex items-center justify-center"><Hourglass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#306cce', '#72a1ed']}
                /></div>}
                {error && <ErrorPage error={error} />}
        </div>
        
    )
}

export default SearchMovie;