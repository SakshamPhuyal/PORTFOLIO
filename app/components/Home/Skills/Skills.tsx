'use client';
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import {
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiC,
  SiCplusplus,
  SiTailwindcss,
  SiVite,
  SiMysql,
  SiGithub,
  SiGitlab,
  SiVercel,
  SiShadcnui,
  SiMui,
  SiFigma,
} from 'react-icons/si';
import ParticlesHero from '../Hero/Background';

// Define a proper type for each skill
type Skill = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
};

const Skills: React.FC = () => {
  const languages: Skill[] = [
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'C', icon: SiC, color: 'text-blue-400' },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-700' },
  ];

  const frameworks: Skill[] = [
    { name: 'React', icon: FaReact, color: 'text-cyan-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
    { name: 'Vite', icon: SiVite, color: 'text-purple-500' },
    { name: 'shadcn/ui', icon: SiShadcnui, color: 'text-white' },
    { name: 'MUI', icon: SiMui, color: 'text-blue-500' },
  ];

  const databases: Skill[] = [
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
  ];

  const others: Skill[] = [
    { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
    { name: 'GitHub', icon: SiGithub, color: 'text-white' },
    { name: 'GitLab', icon: SiGitlab, color: 'text-orange-500' },
    { name: 'Vercel', icon: SiVercel, color: 'text-black dark:text-white' },
    { name: 'Figma', icon: SiFigma, color: 'text-pink-500' },
  ];

  // Render a section with a title and its skills
  const renderSection = (title: string, skills: Skill[]) => (
    <div className="mb-6 w-[70%]">
      <h2 className="text-2xl font-semibold mb-3 ml-6 text-white">{title}</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
        {skills.map((skill) => {
          const Icon = skill.icon; // assign to uppercase variable for JSX
          return (
            <div
              key={skill.name}
              className="bg-white/10 w-24 p-3 rounded-lg flex flex-col items-center hover:scale-105 transition-transform"
            >
              <Icon className={`text-3xl ${skill.color}`} />
              <p className="text-gray-200 text-xs text-center">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div
      id="skills"
      className="relative min-h-screen pt-20 pb-12 overflow-hidden flex flex-col items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <ParticlesHero />
      </div>

      <div className="w-[95%] sm:w-[85%] mx-auto relative z-10 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
          Tech <span className="text-cyan-300">Stack</span>
        </h1>

        {/* Vertical layout: all sections stacked */}
        {renderSection('Languages', languages)}
        {renderSection('Frameworks & Libraries', frameworks)}
        {renderSection('Database', databases)}
        {renderSection('Others', others)}
      </div>
    </div>
  );
};

export default Skills;
