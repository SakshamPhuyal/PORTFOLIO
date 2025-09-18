import React from 'react'
import { IconType } from 'react-icons'
type props={
  Icon:IconType;
  date?:string;
}
const ResumeCard = ({
  Icon,date}:props) => {
  return (
    <div className='mb-6'>
      <div className='flex items-center space-x-6 bg-blue-950/20 transition-all duration-300 p-4 rounded-md relative'>
<div className='w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center  absolute top-1 left-5 flex-col'>
<Icon className='w-6 h-6 text-white' />
</div>
<h1 className='text-gray-300 text-xl mt-4 p-3'>I’m Saksham Phuyal, a passionate Full-Stack Developer who loves crafting dynamic, scalable, and user-friendly web applications. I enjoy turning ideas into reality through clean code, intuitive design, and efficient solutions. With a strong foundation in both frontend and backend technologies, I specialize in building seamless digital experiences that are both functional and visually engaging. I’m always eager to learn new tools, explore emerging technologies, and take on challenges that push me to grow as a developer while delivering meaningful impact through my work.</h1>
      </div>
    </div>
  )
}

export default ResumeCard
