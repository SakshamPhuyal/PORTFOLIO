import React from 'react'
import {FaCode} from "react-icons/fa"
const Nav = () => {
  return (
    <div className='transition-all duration-200 h-[12vh] z-[1000] fixed w-full text-white'>
      <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
              <FaCode  className='w-5 h-5 text-black'/>
          </div>
<h1 className='text-2xl text-white font-bold'>SAKSHAM</h1>
        </div>

      </div>
  
    </div>
  )
}

export default Nav
