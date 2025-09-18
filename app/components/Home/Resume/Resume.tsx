import React from 'react'
import ResumeCard from './ResumeCard'
import { FaUser } from 'react-icons/fa'

const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-2 gap-10'>
        <div>
        <h1 className='text-3xl font-bold text-white '>About <span className='text-cyan-300'>Me</span></h1>
        <div className='mt-10'>
<ResumeCard  Icon={FaUser}/>
        </div>
        </div>
        <div>
          <h1  className='text-3xl font-bold text-white '><span className='text-cyan-300'>My</span> Education</h1>
        </div>
      </div>
    </div>
  )
}

export default Resume
