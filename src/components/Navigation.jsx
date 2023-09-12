import tvLogo from '../assets/tv_logo.png';
import { NavLink } from 'react-router-dom';

const Navigation = (props) =>{

    return <nav className='text-black min-h-screen py-8 border'>
        <div className='mx-6 my-4'>
            <img className='w-12 h-12 inline-block' src={tvLogo} alt="tv logo" />
            <span className='text-2xl px-4 align-middle'>MovieBox</span>
        </div>
        <ul className='my-8'>
            <li className='my-12 pl-8 pr-2'>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li className='py-6 my-6 pl-8 pr-2 bg-red-200 border-r-4 border-red-600'>
                <NavLink  active>Movies</NavLink>
            </li>
            <li className='my-12 pl-8 pr-2'>
                <NavLink>TV Series</NavLink>
            </li>
            <li className='my-12 pl-8 pr-2'>
                <NavLink>Upcoming</NavLink>
            </li>
        </ul>
        <div className='rounded-xl border border-red-600 bg-red-100 px-4 py-6 mx-4'>
            <p className='text-xl py-2'>Play movie quizes and earn free tickets</p>
            <p>50k people are playing now</p>
            <a className='p-2 bg-red-300  text-red-600 rounded-full inline-block my-4' href="">Start playing</a>
        </div>
        <button className='mx-8 my-6'>Log out</button>
    </nav>
};

export default  Navigation;