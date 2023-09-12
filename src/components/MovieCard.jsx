import poster from '../assets/poster.svg'
import Rating from './Rating';

const MovieCard = (props)=>{

    return (
        <div data-testid='movie-card' className='border '>
                    <div>
                        <img data-testid='movie-poster' className='w-full' src={poster} alt="" />
                    </div>
                    <div className='px-4 py-3'>
                        <p data-testid='movie-release-date' className='text-gray-500'>USA 2005</p>
                        <h2 data_testid='movie-title' className='text-xl'>Batman Begins</h2>
                        <Rating imdcScore='82.0' tomatoeScore='87%'></Rating>
                        <p className='text-gray-500'>action adventure</p>
                    </div>
                    
                </div>
    )
};
export default MovieCard