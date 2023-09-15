import facebook from '../assets/facebook.svg';
import instagram from '../assets/fa-brands_instagram.svg'
import twittter from '../assets/fa-brands_twitter.svg'
import youtube from '../assets/fa-brands_youtube.svg'

const Footer = (props) =>{

    const social = [facebook, instagram, twittter, youtube]
    return (
        <footer className='flex flex-col justify-center items-center py-16 text-black'>
            <ul className='flex justify-between items-center px-4 sm:flex-col'>
                {social.map((icon, index)=>{
                    return <li className='px-4' key={index*Math.random()*200}>
                        <img src={icon} alt="" />
                    </li>
                })}
            </ul>
            <p className='flex sm:flex-col justify-between items-center py-4'>
                <a className='px-6 '  href="">Conditions of use</a>
                <a className='px-8 sm:py-3' href="">Privacy & Policy</a>
                <a className='' href="">Press Room</a>
            </p>
            <p className='text-center px-2'>copyright 2021 MovieBox by Adriana Eka Prayudha</p>
        </footer>
    )
};

export default Footer;