import React from 'react'
import ResumeCard from './ResumeCard'
import { FaPen, FaUser } from 'react-icons/fa'
import { BiBadge } from 'react-icons/bi'
import { BsDatabase } from 'react-icons/bs'
import ParticlesHero from '../Hero/Background'

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <ParticlesHero />
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-2 gap-10">
        
        {/* About Me Section */}
        <div>
          <h1 className="text-3xl font-bold text-white">
            About <span className="text-cyan-300">Me</span>
          </h1>
          <div className="mt-10">
            <ResumeCard 
              Icon={FaUser} 
              text="I’m Saksham Phuyal, a passionate Full-Stack Developer who loves crafting dynamic, scalable, and user-friendly web applications. I enjoy turning ideas into reality through clean code, intuitive design, and efficient solutions. With a strong foundation in both frontend and backend technologies, I specialize in building seamless digital experiences that are both functional and visually engaging. I’m always eager to learn new tools, explore emerging technologies, and take on challenges that push me to grow as a developer while delivering meaningful impact through my work."
            />
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h1 className="text-3xl font-bold text-white">
            <span className="text-cyan-300">My</span> Education
          </h1>
          <div className="mt-10">
            <ResumeCard 
              Icon={BiBadge} 
              text="Currently pursuing a Bachelor’s degree in Computer Science and Information Technology (BSc CSIT)"
              college='Amrit Science Campus, Tribhuwan University '
            />
            <ResumeCard 
              Icon={FaPen} 
              text="Completed my +2 education with a GPA of 3.46"
              college='Xavier International College, Kalopul '
            />
             <ResumeCard 
              Icon={BsDatabase} 
              text="Certification"
              college='Free Code Camp- Responsive Web Design   
              CodeForChange-UI/UX Design'
            />
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Resume
