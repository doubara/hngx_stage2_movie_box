
const MovieDetailsCard = ({movie}) =>{
    return <div className="min-h-full text-black px-6 py-6">
        <div className="h-1/2">
            <img className='rounded-lg w-full  object-cover' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
        </div>
        <p className="py-6 leading-loose flex gap-2 flex-gap-2 md:flex-col text-xl items-center">
            <span data-testid='movie-title'>{movie?.title} </span>
            <span data-testid='movie-release-date'>{movie?.release_date}</span> 
            <span> PG-13 </span> 
            <span data-testid='movie-runtime'>{movie.runtime}</span>
            <span className="text-red-400 border-grey-200 rounded-full p-4">{movie.genres.map(genre=>{
            return <span key={genre*Math.random()*876} className="text-red-400 border border-gray-200 rounded-full inline-blok mr-2 p-2">{genre.name}</span>
        })}</span>  
        <span className="ml-auto md:ml-0">
            <span className="text-grey-20 ">{movie.vote_average}|{`${Math.round(movie.vote_count/1000)}k`}</span>
        </span>
        </p>
        <div className="flex md:flex-col items-stretch">
            <div className="basis-3/4 px-4 text-black">
                <p data-testid='movie-overview'>{movie.overview}</p>
                <p className='my-2'>Production: {movie.production_companies.map(company=>{
                    return <span className='px-2 text-red-400'>{company.name}</span>
                })}</p>
                <p className='mb-2'>Status:<span className='px-2 text-red-400'>{movie.status}</span></p>
                
                {/* <p className='py-2'>Director: <span className="text-red-400 my-4">Joseph Kosinki</span></p>
                
                <p className='py-2'>Writers: <span className="text-red-400 my-4">Jim Cash, Jack Epps Jr, Peter Craig</span></p>
                
                <p className='py-2'>Stars: <span className="text-red-400 my-4">Tom Cruise, Jennifer Connely, Mius Teller</span></p> */}

                <div className="my-4 rounded-lg">
                    <button className='bg-red-400 rounded-lg py-2 px-8'>Top Rated Movie #65</button><span className='px-4'>Awards 9 Nominations</span>
                </div>
            </div>
            <div className="basis-1/4 md:px-4">
                <button className="w-full py-3 rounded-lg text-white bg-red-400 txt-center">See Showtimes</button>
                <button className="block w-full rounded-lg py-3 mt-2 border border-red-400 bg-red-200 text-black text-center">See Showtimes</button>
            </div>
        </div>
    </div>
};

export default MovieDetailsCard;
