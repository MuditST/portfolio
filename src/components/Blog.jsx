import React from 'react'
import blog from '../assets/Blog.svg'
import { useTypewriter} from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index'

const Blog = () => {const {text} = useTypewriter({
    words: ["Coming SoonTM . . ."],
    loop: 0, 
    typeSpeed: 90,
    deleteSpeed: 60,
    delaySpeed: 1200
    
    })
   
return (
<div className='bg-slate-900 w-full h-screen flex justify-center items-center cursor-default lg:pl-52'>
    <div className='hidden lg:flex shrink-0.5'>
        <img className='scale-110'src={blog} alt="blog Image" />
    </div>

    <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full'>
        <div><span className='text-6xl text-slate-50 inline border-b-4 border-sky-200 hover:text-sky-200'>Blog</span></div>
        <p className='text-slate-400 text-2xl pt-10 '>A venue for me to document my developer voyage.</p>
        <p className='text-slate-400 text-2xl pb-5'>Kicks off along with my University Arc 🙏</p>
        <p className='text-slate-400 text-6xl'>
            <span className='text-sky-200 text-7xl'> 
            {text}<span className="cursor">_</span>
            </span>
        </p>
    </div>
    
</div>
)
}

export default Blog