import play from '../assets/Play.svg'
import tomatoe from '../assets/tomatoe.png';
import imdbLogo from '../assets/imdb_logo.png';
import Rating from './Rating';

const HeroComponent = (props) =>{
    return(
        <section className='w-1/3 p-4 ms-16 my-auto'>
            
            <h1>John Wick 3 : Parabellum</h1>
            {/* <p className='justify-between my-4'>
                <span>
                    <img className='w-4 h-4 inline-block' src={imdbLogo} alt="" /> 86.0/10
                </span>
                
                <span className='inline-block ms-8'>
                <img className='w-8 h-8 inline-block' src={tomatoe} alt="" /> 97%
                </span>
            </p> */}
            <Rating imdbScore='86.0' tomatoeScore='97%'></Rating>
            <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
            <button className='inline-block my-3 bg-red-400 py-2 px-2 rounded-lg'>
                <img className='inline-block pr-2' src={play} alt="" />
                WATCH TRAILER
            </button>
        </section>
    )
}

export default HeroComponent;