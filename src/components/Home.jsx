import React from 'react'
import Work from '../assets/Work.svg'
import { useTypewriter} from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index'


const Home = () => {

    const {text} = useTypewriter({
        words: [ " Developer."," Learner."," Human."],
        loop: 0, 
        typeSpeed: 90,
        deleteSpeed: 70,
        delaySpeed: 1000
        })
       
  return (
    <div className='bg-slate-900 w-full h-screen flex justify-center items-center cursor-default lg:pl-40 lg:pr-24'>

        <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full px-8'>
            <p className='text-sky-200 text-2xl pb-5'>Hi, my name is</p>
            <p className='text-slate-50 text-8xl hover:text-sky-200 pb-5'>Mudit Singh Tushir</p>
            <p className='text-slate-400 text-6xl'>&amp; I'm a  
                <span className='text-sky-200 text-7xl'> {text} <span className="cursor">|</span>
                </span>
            </p>
        </div>
        <div className='hidden lg:flex shrink-0.5'>
            <img className='scale-75'src={Work} alt="Work Image" />
        </div>
    </div>
  )
}
export default Home