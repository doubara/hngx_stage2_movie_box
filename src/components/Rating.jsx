import tomatoe from '../assets/tomatoe.png';
import imdbLogo from '../assets/imdb_logo.png';

const Rating = ({imdbScore, tomatoeScore}) =>{
    imdbScore = parseFloat(imdbScore).toFixed(1)
    return (
        <p className='justify-between my-2'>
                <span>
                    <img className='w-8 h-4 inline-block' src={imdbLogo} alt="" /> {imdbScore}/10
                </span>
                
                <span className='inline-block ms-8'>
                <img className='w-4 h-4 inline-block' src={tomatoe} alt="" /> {Math.floor(tomatoeScore)}%
                </span>
            </p>
    )
};

export default Rating;