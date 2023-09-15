import tvLogo from '../assets/tv_logo.png';
import { NavLink } from 'react-router-dom';

const Navigation = (props) =>{


    return <nav className='text-black min-h-screen py-8 md:flex md:min-h-0 md:py-0 items-center text-center flex-wrap'>
        <div className='mx-6 my-4 md:my-2'>
            <img className='w-12 h-12 inline-block' src={tvLogo} alt="tv logo" />
            <span className='text-2xl px-4 align-middle'>MovieBox</span>
        </div>
        <ul className='my-8 md:my-0 md:flex md:flex-1 md:items-center'>
            <li className='my-12 pl-8 pr-2 md:py-2 md:my-0'>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li className='py-6 my-6 pl-8 pr-2 bg-red-200 border-r-4 border-red-600 md:border-none md:text-red-600 md:bg-transparent md:border-0 md:border-t-4 md:py-2 md:my-0 '>
                <NavLink className='hover:text-red-500' >Movies</NavLink>
            </li>
            <li className='my-12 pl-8 pr-2 md:py-2 md:hidden'>
                <NavLink>TV Series</NavLink>
            </li>
            <li className='my-12 pl-8 pr-2  md:py-2 md:hidden'>
                <NavLink>Upcoming</NavLink>
            </li>
        </ul>
        <div className='rounded-xl border border-red-600 bg-red-100 px-4 py-6 mx-4 md:hidden'>
            <p className='text-xl py-2'>Play movie quizes and earn free tickets</p>
            <p>50k people are playing now</p>
            <a className='p-2 bg-red-300  text-red-600 rounded-full inline-block my-4' href="">Start playing</a>
        </div>
        <button className='mx-8 my-6 md:hidden'>Log out</button>
    </nav>
};

export default  Navigation;