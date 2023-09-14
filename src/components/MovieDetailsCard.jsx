import poster from '../assets/Rectangle.png';
import famousImg from '../assets/Rectangle_37.png'

const MovieDetailsCard = ({movie}) =>{

    return <div className="min-h-full text-black px-6 py-6">
        <div className="h-1/2">
            <img className='rounded-lg w-full  object-cover' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
        </div>
        <p className="py-6 leading-loose">
            <span data-testid='movie-title'>{movie?.title}</span> . <span data-testid='movie-release-date'>{movie.release_date}</span> . PG-13 . <span data-testid='movie-runtime'>{`${Math.round(movie.runtime/60)-1}${Math.round(movie.runtime/60)-1 < 1? 'Hr' : 'Hrs'} ${movie.runtime%60}${movie.runtime%60 < 1 ? 'min' : 'Mins'}`}</span> <span className="text-red-400 border-grey-200 rounded-full p-4">{movie.genres.map(genre=>{
            return <span key={genre*Math.random()*876} className="text-red-400 border border-gray-200 rounded-full inline-blok ml-2 p-2">{genre.name}</span>
        })}</span>  
        <span className="py-2">
            <span className="text-grey-20 ">{movie.vote_average}</span>
        </span>|{`${Math.round(movie.vote_count/1000)}k`}</p>
        <div className="flex md:flex-col items-stretch">
            <div className="basis-3/4 px-4">
                <p data-testid='movie-overview'>{movie.overview}</p>
                
                <p className='py-2'>Director: <span className="text-red-400 my-4">Joseph Kosinki</span></p>
                
                <p className='py-2'>Writers: <span className="text-red-400 my-4">Jim Cash, Jack Epps Jr, Peter Craig</span></p>
                
                <p className='py-2'>Stars: <span className="text-red-400 my-4">Tom Cruise, Jennifer Connely, Mius Teller</span></p>

                <div className="my-2 border border-gray-400 rounded-lg">
                    <button className='bg-red-400 rounded-lg py-2 px-8'>Top Rated Movie #65</button><span className='px-4'>Awards 9 Nominations</span>
                </div>
            </div>
            <div className="basis-1/4 md:px-4">
                <button className="w-full py-3 rounded-lg text-white bg-red-400 txt-center">See Showtimes</button>
                <button className="block w-full rounded-lg py-3 mt-2 border border-red-400 bg-red-200 text-black text-center">See Showtimes</button>
                <div className='mt-2 relative'>
                    <img className='w-full' src={famousImg} alt="" />
                    <p className='absolute bottom-0 text-xs w-full px-4 text-white bg-gray-600 bg-opacity-50 rounded-lg'>The Best Movies and shows in September</p>
                </div>
            </div>
        </div>
    </div>
};

export default MovieDetailsCard;