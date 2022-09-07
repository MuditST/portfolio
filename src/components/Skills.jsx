import React from 'react'
import python from '../assets/python.png'
import js from '../assets/js.png'
import mysql from '../assets/mysql.png'
import react from '../assets/react.png'
import css from '../assets/css.png'
import html from '../assets/html.png'


const Skills = () => {
  return (
    <div className='bg-slate-900 w-full h-screen cursor-default'>
        <div className='max-w-[1000px] w-full h-full p-4 mx-auto flex flex-col justify-center'>
            <div>
                <p className='text-6xl text-slate-50  inline border-b-4 border-sky-200 hover:text-sky-200'>Skills</p>
                <p className='py-8 text-slate-400 text-xl'> &gt;&gt; Technologies that I have worked with &gt;&gt;</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='bg-slate-50 rounded-2xl p-10 hover:shadow-md hover:shadow-sky-200 hover:bg-sky-200'>
                    <img className='w-20 mx-auto' src={html} alt="html icon" />
                    <p className='text-slate-900 p-2 fond-bold'>HTML</p>
                </div>
                <div className='bg-slate-50 rounded-2xl p-10 hover:shadow-md hover:shadow-sky-200 hover:bg-sky-200'>
                    <img className='w-20 mx-auto' src={css} alt="css icon" />
                    <p className='text-slate-900 p-2 fond-bold'>CSS</p>
                </div>
                <div className='bg-slate-50 rounded-2xl p-10 hover:shadow-md hover:shadow-sky-200 hover:bg-sky-200'>
                    <img className='w-20 mx-auto' src={js} alt="js icon" />
                    <p className='text-slate-900 p-2 fond-bold'>JavaScript</p>
                </div>
                <div className='bg-slate-50 rounded-2xl p-10 hover:shadow-md hover:shadow-sky-200 hover:bg-sky-200'>
                    <img className='w-20 mx-auto' src={react} alt="react icon" />
                    <p className='text-slate-900 p-2 fond-bold'>ReactJS</p>
                </div>
                <div className='bg-slate-50 rounded-2xl p-10 hover:shadow-md hover:shadow-sky-200 hover:bg-sky-200'>
                    <img className='w-20 mx-auto' src={python} alt="python icon" />
                    <p className='text-slate-900 p-2 fond-bold'>Python</p>
                </div>
                <div className='bg-slate-50 rounded-2xl p-10 hover:shadow-md hover:shadow-sky-200 hover:bg-sky-200'>
                    <img className='w-20 mx-auto' src={mysql} alt="mysql icon" />
                    <p className='text-slate-900 p-2 fond-bold'>MySQL</p>
                </div>
            </div>
        </div>
    
    
    </div>
  )
}

export default Skills