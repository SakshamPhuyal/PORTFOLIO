import React from 'react'
import Hero from './Hero/Hero'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'

const Home = () => {
  return (
    <div className='overflow-hidden '>
      <Hero/>
      <Resume />
      <Projects />
    </div>
  )
}

export default Home
