import tvLogo from '../assets/tv_logo.png';
import Menu from '../assets/Menu.png';
import Search from '../assets/Search.svg';

const Nav = (props)=>{

    return (
        <nav className="flex justify-between items-center py-4 px-16">
            <div className='flex-1'>
                <img className='w-12 h-12 inline-block' src={tvLogo} alt="tv logo" />
                <span className='text-2xl px-4 align-middle'>MovieBox</span>
            </div>
            <form className='flex-1'>
                <div className='relative'>
                    <input className='px-2 py-4 bg-transparent border-2 rounded-lg text-white w-full' type="text" placeholder="What do you want to watch?" />
                    <button className='absolute top-4 right-2 h-8 w-8'><img className='inline-block w-6 h-6' src={Search} alt="" /></button>
                </div>
            </form>
            <div className='ms-auto flex-1 text-right'>
                <a className='px-2 align-middle'>Sign up</a>
                <button className=' inline-block'><img className='inline-block' src={Menu} alt="" /></button>
            </div>
        </nav>
    )
};

export default Nav;