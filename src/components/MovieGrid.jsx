import MovieCard from "./MovieCard";

const MovieGrid = ({movies, className})=>{
    console.log(className);
    return <div>
        <div className={`py-4 px-4 customGrid gap-16 ${className}`}>
            {movies.results.length ? movies.results?.map((movie, index)=>{
                    return <MovieCard movie={movie}></MovieCard>
                }) : <p className="text-center text-xl">No Movies to display</p>}
        </div>
    </div>
};


export default MovieGrid;