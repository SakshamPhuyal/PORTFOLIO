import React from 'react'
import { IconType } from 'react-icons'

type Props = {
  Icon: IconType;
  college?: string;
  text: string;
}

const ResumeCard = ({ Icon, college, text }: Props) => {
  return (
    <div className="mb-6">
      <div className="
        bg-blue-950/20 
        transition-all duration-500 
        p-4 rounded-md relative shadow-lg
        hover:scale-105 hover:shadow-2xl hover:bg-blue-950/70
        transform
        motion-safe:animate-fadeIn
      ">
        {/* Icon */}
        <div className="w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center absolute top-1 left-5 shadow-md
          transition-transform duration-500
          group-hover:scale-110
        ">
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Text */}
        <h1 className="text-gray-300 text-xl mt-8 p-3 transition-all duration-500 group-hover:text-cyan-300">
          {text}
        </h1>
        {college && (
          <h1 className="text-gray-300 text-lg -mt-3 p-3 transition-all duration-500 group-hover:text-cyan-200">
            {college}
          </h1>
        )}
      </div>
    </div>
  )
}

export default ResumeCard
