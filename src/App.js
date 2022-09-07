import React from 'react'
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import Contact from "./components/Contact";


const App = () => {
  return ( 
    <main>
    <Navbar />
    <div className='snap-y snap-mandatory h-screen overflow-y-auto scrollbar-hide'>
      <section id='home' className='snap-center'><Home /></section>
      <section id= 'about' className='snap-center'><About /></section>
      <section id='skills' className='snap-center'><Skills /></section>
      <section id='blog' className='snap-center'><Blog /></section>
      <section id='contact' className='snap-center'><Contact /></section>
    </div>
    </main>
  )
}

export default App