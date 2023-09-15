import {useState} from 'react';
import heart from '../assets/Heart.svg'
import redHeart from '../assets/redheart.svg';

import Rating from './Rating';

import { Link } from 'react-router-dom';

const GENRE = {
    28: "Action",
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Docmentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'romance',
    878: 'Science Fiction',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
}

const MovieCard = ({title, movie})=>{

    const [clicked, setClicked] = useState(false);
    
    return (
        <div data-testid='movie-card' className='border relative'>
                    <div className=''>
                        <img data-testid='movie-poster' className=' object-cover' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                    </div>
                    <div className='px-4 py-3'>
                        <p data-testid='movie-release-date' className='text-gray-500'>{movie.release_date}</p>
                        <h2 className='text-xl '><Link className='hover:text-gray-600 hover:scale-150' data_testid='movie-title' to={`/movies/${movie.id}`}>{movie.title}</Link></h2>
                        <Rating imdbScore={movie.vote_average} tomatoeScore={movie.popularity}></Rating>
                        <p className='text-gray-500'>{movie.genre_ids.map(genre_id=>{
                            return <span className='px-1' key={genre_id}>{GENRE[genre_id]}</span>
                        })}</p>
                    </div>
                    <button onClick={(event)=>setClicked(previousState=>!previousState)} className='w-14 h-14 rounded-full absolute top-1 p-4 right-1 hover:bg-red-400'>
                        <img src={!clicked ?heart : redHeart} alt="" />
                    </button>
                </div>
    )
};
export default MovieCard;
