'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // core styles
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectData = [
    {
      title: "Sanskriti Bazar",
      img: "/images/sb.png",
      desc: "Sanskriti Bazar is a React-based platform where the new generation can explore Nepal's rich cultural heritage and buy traditional tools like doko, namlo, mana, and more — blending tradition with technology.",
      demoLink: "https://sanskrit-alpha.vercel.app/",
      githubLink: "https://github.com/SakshamPhuyal/Sanskrit",
    },
     {
      title: "Weather App",
      img: "/images/wapp.png",
      desc: "Fetches live weather data using API, Displays temperature, weather conditions & other information with city search with responsive UI.",
      demoLink: "https://weather-app-three-xi-73.vercel.app/",
      githubLink: "https://github.com/SakshamPhuyal/weather-app",
    },
    {
      title: "Weather App",
      img: "/images/wapp.png",
      desc: "Fetches live weather data using API, Displays temperature, weather conditions & other information with city search with responsive UI.",
      demoLink: "https://weather-app-three-xi-73.vercel.app/",
      githubLink: "https://github.com/SakshamPhuyal/weather-app",
    },
    {
      title: "AI Chatbot",
      img: "/images/chatbot.png",
      desc: "Chatbot built using Next.js and OpenAI API for portfolio Q&A.",
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/SakshamPhuyal/ai-chatbot",
    },
  ];

  return (
    <div className="pt-16 pb-6">
      <h1 className="text-center text-5xl text-white font-bold">
        Projects <span className="text-cyan-300">Section</span>
      </h1>

      <div className="w-[85%] mx-auto mt-16">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 }, // 2 per row on md+
            1024: { slidesPerView: 3 }, // 3 per row on lg+
          }}
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
