import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import tvLogo from '../assets/tv_logo.png';
import Menu from '../assets/Menu.png';
import Search from '../assets/Search.svg';

const Nav = (props)=>{
    const inputRef = useRef();

    // initializing navigate hook
    const navigate = useNavigate();
    
    // redirect to  search page;
    function submitSearch(event){
        event.preventDefault();
        let search = inputRef.current.value
        navigate(`/search/${search}`)
    }

    return (
        <nav className="flex flex-wrap justify-between items-center py-4 px-8 relative">
            <div className='flex flex-wrap items-center'>
                <img className='w-12 h-12 inline-block' src={tvLogo} alt="tv logo" />
                <span className='text-2xl px-4 align-middle md:lg'>MovieBox</span>
            </div>
            <form onSubmit={submitSearch} className='w-96 md:w-full md:mt-4 md:order-2'>
                <div className='relative md:flex-1 md:mx-auto'>
                    <input ref={inputRef} className='w-full px-2 py-4 bg-transparent border-2 rounded-lg text-white' type="text" placeholder="What do you want to watch?" />
                    <button className='absolute top-4 right-2 h-8 w-8'><img className='inline-block w-6 h-6' src={Search} alt="" /></button>
                </div>
            </form>
            <div className='text-right'>
                <a className='px-2 align-middle'>Sign up</a>
                <button className=' inline-block'><img className='inline-block' src={Menu} alt="" /></button>
            </div>
        </nav>
    )
};

export default Nav;