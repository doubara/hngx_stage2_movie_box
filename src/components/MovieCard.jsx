import {useState} from 'react';

import poster from '../assets/poster.svg'
import heart from '../assets/Heart.svg'
import redHeart from '../assets/Red_heart.svg';

import Rating from './Rating';

import { Link } from 'react-router-dom';
// Action          28
// Adventure       12
// Animation       16
// Comedy          35
// Crime           80
// Documentary     99
// Drama           18
// Family          10751
// Fantasy         14
// History         36
// Horror          27
// Music           10402
// Mystery         9648
// Romance         10749
// Science Fiction 878
// TV Movie        10770
// Thriller        53
// War             10752
// Western         37
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
        <Link to={`movie/${movie.id}`} data-testid='movie-card' className='border relative hover:scale-105'>
                    <div>
                        <img data-testid='movie-poster' className='w-full' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                    </div>
                    <div className='px-4 py-3'>
                        <p data-testid='movie-release-date' className='text-gray-500'>{movie.release_date.slice(0, 4)}</p>
                        <h2 data_testid='movie-title' className='text-xl'>{movie.title}</h2>
                        <Rating imdbScore={movie.vote_average} tomatoeScore={movie.popularity}></Rating>
                        <p className='text-gray-500'>{movie.genre_ids.map(genre_id=>{
                            return <span className='px-1' key={genre_id}>{GENRE[genre_id]}</span>
                        })}</p>
                    </div>
                    <button onClick={(event)=>setClicked(true)} className='w-12 h-12 rounded-full absolute -top-2 p-4 -right-3 hover:bg-red-400'>
                        <img src={!clicked ?heart : redHeart} alt="" />
                    </button>
                </Link>
    )
};
export default MovieCard