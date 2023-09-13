
import MovieCard from "./MovieCard";

const FeaturedMovies = (props) =>{

    return (
        <div className='text-black px-16 py-16 border-black'>
            <h2 className='text-4xl pb-4 font-bold'>Feature Movies</h2>
            <div className='grid gap-16 grid-cols-4'>
            {new Array(10).fill('movie').map((movie, index) =>{
                return <MovieCard title={index} key={index*Math.random()*210*Math.random()*197} />
            })}
            </div>
            
        </div>
    )
};

export default FeaturedMovies;