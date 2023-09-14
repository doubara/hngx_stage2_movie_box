import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import tvLogo from '../assets/tv_logo.png';
import Menu from '../assets/Menu.png';
import Search from '../assets/Search.svg';
import SearchBlack from '../assets/Search_black.svg';

const Nav = (props)=>{

    const [toggleSearch, setToggleSearch] = useState('false');
    const inputRef = useRef();

    // initializing navigate hook
    const navigate = useNavigate();
    
    // redirect to  search page;
    function submitSearch(event){
        event.preventDefault();
        let search = inputRef.current.value
        navigate(`/search/${search}`)
        // console.log(search);
    }

    return (
        <nav className="flex justify-between items-center py-4 px-8 relative">
            <div className='flex items-center flex-1'>
                <img className='w-12 h-12 inline-block' src={tvLogo} alt="tv logo" />
                <span className='text-2xl px-4 align-middle md:lg'>MovieBox</span>
            </div>
            <form onSubmit={submitSearch} className={`flex-1 md:absolute md:-top-0 md:left-0  md:w-full md:p-2 md:flex md:bg-gray-100 md:bg-opacity-90 md:text-black ${toggleSearch ? 'md:hidden' : 'md:block'}`}>
                <div className='relative md:flex-1 md:mx-auto'>
                    <input ref={inputRef} className='px-2 py-4 bg-transparent border-2 rounded-lg text-white md:text-black w-full md:border-black' type="text" placeholder="What do you want to watch?" />
                    <button onClick={submitSearch} className='absolute top-4 right-2 h-8 w-8'><img className='inline-block w-6 h-6' src={toggleSearch ? Search : SearchBlack} alt="" /></button>
                    
                </div>
                <button onClick={(event)=>setToggleSearch(previousState=>!previousState)} className='hidden md:block  mx-4 px-6 rounded-md  bg-black text-lg text-white'>x</button>
            </form>
            <div className='ms-auto flex-1 text-right'>
                <a className='px-2 align-middle'>Sign up</a>
                <button onClick={(event)=>setToggleSearch(previousState=>!previousState)} className=' inline-block'><img className='inline-block' src={Menu} alt="" /></button>
            </div>
        </nav>
    )
};

export default Nav;