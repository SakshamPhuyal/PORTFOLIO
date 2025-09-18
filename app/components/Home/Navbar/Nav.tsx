'use client'
import { Navlinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiDownload } from 'react-icons/bi'
import {FaCode} from "react-icons/fa"
const Nav = () => {
  const [navbg,setNavbg]=useState(false);
  useEffect(()=>{
const handler=()=>{
  if(window.scrollY>=90) setNavbg(true);
  if(window.scrollY<90) setNavbg(false)
};
window.addEventListener("scroll",handler);
return ()=>window.removeEventListener("scroll",handler);  
},[]);
  return (
    <div className={`transition-all ${navbg?'bg-[#0f142ed9] shadow-md':"fixed"} duration-200 h-[12vh] z-[1000] fixed w-full text-white`}>
      <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
              <FaCode  className='w-5 h-5 text-black'/>
          </div>
<h1 className='text-2xl text-white font-bold'>SAKSHAM</h1>
        </div>
<div className='flex items-center space-x-10'>
{Navlinks.map((link)=>{
  return<Link key={link.id} href={link.url} className='text-base hover:text-cyan-400 text-white font-medium transition-all duration-200'>
    <p className='text-xl'>{link.label}</p>
  </Link>
})}
</div>
<div className='flex items-center space-x-4'>
<button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2'>
<BiDownload className='w-5 h-5' />
<span>Download CV</span>
</button>
</div>
      </div>
  
    </div>
  )
}

export default Nav
