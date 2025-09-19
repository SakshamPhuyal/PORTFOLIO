'use client';
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { BsArrowRight } from 'react-icons/bs';
import ParticlesHero from './Background';

const Hero = () => {
  return (
    <div id="home" className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
   < ParticlesHero />
      <div className='relative z-10 flex flex-col items-center'>
        <Image src="/images/saksham.jpg" alt='img' width={220} height={190}  className='rounded-full  border-[#0c0c48aa] 
             shadow-[0_0_10px_rgba(255,0,0,0.7),0_0_20px_rgba(255,0,0,0.5),0_0_30px_rgba(255,0,0,0.3)]
                     animate-[pulseRed_2s_ease-in-out_infinite]'
/>
      <h1 className='text-3xl mt-6 text-center font-bold tracking-wide'>
Full-Stack Developer passionate about building <br /> dynamic and user-friendly applications.</h1>
<h2 className='mt-5 text-lg text-center font-medium flex items-center'> Hi! I&apos;m Saksham- A passionate <span className='text-cyan-300 font-bold'>
    <Typewriter options={{
        strings:[
            'Frontend Developer',
            'Backend Developer',
            'Graphic Designer'
        ],
        autoStart:true,
        loop:true,
        delay:75,
        deleteSpeed:50,
        wrapperClassName:'pl-2'
    }} />
</span> 
</h2>
<button className='mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium'>
  <span> See my work</span>
  <BsArrowRight className='w-5 h-5 ml-2 inline-block'/>
</button>
      </div>
    </div>
  )
}

export default Hero
