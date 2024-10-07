import React, { useRef } from 'react'
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';

function App() {

  const about = useRef(null);
  const exp = useRef(null);
  const projects = useRef(null);
  const scrollingContainer = useRef(null)

  const scrollToSection = (elementRef) => {
    scrollingContainer.current.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }


  return (
    <div className='w-full h-screen bg-zinc-900 flex'>
      <header className='w-2/5 flex flex-col h-screen text-left px-14 pt-12 space-y-2'>
        <h1 className='font-mono text-white font-medium text-5xl'>Om Jaiswal</h1>
        <h2 className='font-mono text-white font-medium text-3xl'>Aspiring Software Engineer</h2>
        <div className='text-gray-400 font-medium text-sm'>
          <ul>
            <li onClick = {() => scrollToSection(about)} className='link cursor-pointer flex items-center space-x-2'>
              <div className='w-4 flex-shrink-0 border-t-2 border-gray-400 transition-all duration-300'></div>
              <span>ABOUT</span>
              </li>
            <li
            onClick = {() => scrollToSection(exp)} 
            className='link cursor-pointer flex items-center space-x-2'>
              <div className='w-4 flex-shrink-0 border-t-2 border-gray-400 transition-all duration-300'></div>
              <span>EXPERIENCE</span>
              </li>
            <li onClick = {() => scrollToSection(projects)} className='link cursor-pointer flex items-center space-x-2'>
              <div className='w-4 flex-shrink-0 border-t-2 border-gray-400 transition-all duration-300'></div>
              <span>PROJECTS</span>
              </li>
          </ul>
        </div>
      </header>
      <div ref={scrollingContainer} className='w-3/5 h-screen bg-white overflow-y-scroll snap-y snap-mandatory'>
        <About ref={about}/>
        <Experience ref={exp}/>
        <Projects ref={projects}/>
      </div>
    </div>
  )
}

export default App
