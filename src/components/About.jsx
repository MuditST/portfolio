import React from 'react'

const About = () => {
  return (
    
    <div className='w-full h-screen bg-slate-900 text-slate-50'>
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className='pb-8 pl-4 sm:text-right'>
                    <p className='text-6xl text-slate-50 inline border-b-4 border-sky-200 hover:text-sky-200 cursor-default'>About</p>
                </div>
            <div></div>
        </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className='text-4xl text-slate-400 sm:text-right'>
                    <p>Hi. I'm Mudit, nice to meet you. Please take a look around!</p>
                </div>
                <div className='text-2xl'>
                    <p>I'm a Full Stack Developer. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. What would you do if you had a web developer at your fingertips?</p>
                </div>
            </div>
        
        </div>
    </div>
   
  )
}

export default About