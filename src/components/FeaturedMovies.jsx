import { useState, } from "react";
import MovieCard from "./MovieCard";
import { Hourglass } from "react-loader-spinner";
import ErrorPage from "./ErrorPage";
import useFetch from "./custom-hooks/useFetch";
import MovieGrid from "./MovieGrid";

const FeaturedMovies = (props) =>{

    const [url, setUrl] = useState('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1')
    const [isLoading, movieData, error] = useFetch(url);
    

    return (
        <div className='text-black px-16 py-16 border-black'>
            <h2 className='text-4xl pb-4 font-bold'>Feature Movies</h2>
            <div className='min-h-screen
            customGrid gap-16'>
            {!isLoading && <MovieGrid movies={movieData.results} />} 
                <div>
                    {isLoading && <Hourglass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#306cce', '#72a1ed']}
                />}
                </div>
                <div>
                {Boolean(error) && <ErrorPage error={error}/>}
                </div>
            </div>
            
        </div>
    )
};

export default FeaturedMovies;