import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  title: string;
  img: string;
  desc: string;
  demoLink: string;
  githubLink: string;
};

const ProjectCard = ({ title, img, desc, demoLink, githubLink }: Props) => {
  return (
    <div className="bg-blue-950/30 rounded-xl shadow-lg p-5 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      {/* Title */}
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>

      {/* Image */}
      <div className="w-full h-60 relative mb-4">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-6">{desc}</p>

      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-cyan-500 text-white rounded-lg flex items-center gap-2 hover:bg-cyan-400 transition"
        >
          <FaExternalLinkAlt /> Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-700 text-white rounded-lg flex items-center gap-2 hover:bg-gray-600 transition"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
