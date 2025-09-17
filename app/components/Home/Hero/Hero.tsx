'use client';
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
      <div className='relative z-10 flex flex-col items-center'>
        <Image src="/images/saksham.jpg" alt='img' width={150} height={150} className='rounded-full border-8 border-[#0c0c48aa]'  />
      <h1 className='text-3xl mt-6 text-center font-bold tracking-wide'>
Full-Stack Developer passionate about building <br /> dynamic and user-friendly applications.</h1>
<h2 className='mt-5 text-sm text-center font-medium flex items-center'> Hi! I&apos;m Saksham- A passionate <span className='text-cyan-300 font-bold'>
    <Typewriter options={{
        strings:[
            'Frontend Developer',
            'Backend Developer',
            'Creative Thinker'
        ],
        autoStart:true,
        loop:true,
        delay:75,
        deleteSpeed:50,
        wrapperClassName:'pl-2'
    }} />
</span> 
</h2>
      </div>
    </div>
  )
}

export default Hero
