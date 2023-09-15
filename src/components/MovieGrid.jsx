import MovieCard from "./MovieCard";

const MovieGrid = ({movies})=>{
    return <div>
        <div className='customGrid py-4 px-4 gap-4'>
            {movies.length > 0 ? movies.slice(0, 10).map((movie, index)=>{
                    return <MovieCard key={index*Math.random()*865} movie={movie}></MovieCard>
                }) : <p className="text-center text-xl">No Movies to display</p>}
        </div>
    </div>
};


export default MovieGrid;