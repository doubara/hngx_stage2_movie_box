import tomatoe from '../assets/tomatoe.png';
import imdbLogo from '../assets/imdb_logo.png';

const Rating = ({imdbScore, tomatoeScore}) =>{

    return (
        <p className='justify-between my-2'>
                <span>
                    <img className='w-12 h-6 inline-block' src={imdbLogo} alt="" /> {imdbScore}/10
                </span>
                
                <span className='inline-block ms-8'>
                <img className='w-8 h-8 inline-block' src={tomatoe} alt="" /> {Math.round(tomatoeScore)}%
                </span>
            </p>
    )
};

export default Rating;