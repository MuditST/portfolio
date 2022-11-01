import React, {useState} from 'react'
import Logo from '../assets/logo-white.png'
import {FaBars, FaTimes, FaGithub, FaDiscord, FaMailBulk} from 'react-icons/fa'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const hamClick = () => setNav(!nav)
  return (
    
    <div className='fixed w-full h-20 pr-4 flex justify-between items-center text-slate-50 bg-slate-900 z-50'>
        <div className='mt-4 ml-2 cursor-pointer'  onClick={()=>document.getElementById('home').scrollIntoView({behavior:"smooth"})}>
            <img src={Logo} alt="Logo Image" style={{width:"80px"}} />
        </div>
       
        
        <ul className='hidden md:flex text-xl mr-20'>
            <li className='hover:text-sky-200 px-8' onClick={()=>document.getElementById('home').scrollIntoView({behavior:"smooth"})}>Home</li>
            <li className='hover:text-sky-200 px-8' onClick={()=>document.getElementById('about').scrollIntoView({behavior:"smooth"})}>About</li>
            <li className='hover:text-sky-200 px-8' onClick={()=>document.getElementById('skills').scrollIntoView({behavior:"smooth"})}>Skills</li>
            <li className='hover:text-sky-200 px-8' onClick={()=>document.getElementById('blog').scrollIntoView({behavior:"smooth"})}>Blog</li>
            <li className='hover:text-sky-200 px-8' onClick={()=>document.getElementById('contact').scrollIntoView({behavior:"smooth"})}>Contact</li>
            
        </ul>
        
        {/*hamburger*/}
        <div onClick={hamClick} className='md:hidden z-10'>
            {!nav ? <FaBars size={30} /> : <FaTimes size={30}/>}
        </div>
        {/*mobile*/}
        <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
                <div onClick={hamClick}><li className='py-6 text-4xl hover:text-sky-200' onClick={()=>document.getElementById('home').scrollIntoView({behavior:"smooth"}) }>Home</li></div>
                <div onClick={hamClick}><li className='py-6 text-4xl hover:text-sky-200' onClick={()=>document.getElementById('about').scrollIntoView({behavior:"smooth"})}>About</li></div>
                <div onClick={hamClick}><li className='py-6 text-4xl hover:text-sky-200' onClick={()=>document.getElementById('skills').scrollIntoView({behavior:"smooth"})}>Skills</li></div>
                <div onClick={hamClick}><li className='py-6 text-4xl hover:text-sky-200' onClick={()=>document.getElementById('blog').scrollIntoView({behavior:"smooth"})}>Blog</li></div>
                <div onClick={hamClick}><li className='py-6 text-4xl hover:text-sky-200' onClick={()=>document.getElementById('contact').scrollIntoView({behavior:"smooth"})}>Contact</li></div>
        </ul>
        {/*social*/}
        <div className='hidden lg:flex fixed flex-col top-[40%] left-0'>
            <ul>
                
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-slate-50 pl-4' target="_blank" href='https://discordapp.com/users/1016757954797650070'>Discord<FaDiscord size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-gray-700'>
                    <a className='flex justify-between items-center w-full text-slate-50 pl-4' target="_blank" href='https://github.com/MuditST'>Github<FaGithub size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-emerald-700'>
                    <a className='flex justify-between items-center w-full text-slate-50 pl-4' target="_blank" href='mailto:muditsinghtushir@gmail.com'>E-Mail<FaMailBulk size={30}/></a>
                </li>
            </ul>

        </div>
    </div>
    
  )
}

export default Navbar
