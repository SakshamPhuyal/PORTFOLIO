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
      title: "Currency Converter",
      img: "/images/cc.png",
      desc: "A simple and interactive currency converter built with JavaScript that fetches real-time exchange rates to provide accurate and up-to-date conversions between multiple currencies.",
      demoLink: "https://money-exchange-tau.vercel.app/",
      githubLink: "https://github.com/SakshamPhuyal/Money-Exchange",
    },
    {
      title: "Weather App",
      img: "/images/wapp.png",
      desc: "A responsive weather app built with JavaScript that fetches live weather data using an API. It allows to search for any city and displays real-time temperature, weather conditions, and other useful information with an interactive UI",
      demoLink: "https://weather-app-three-xi-73.vercel.app/",
      githubLink: "https://github.com/SakshamPhuyal/weather-app",
    },
    {
      title: "Rock Paper Scissor",
      img: "/images/rps.png",
      desc: "This is a simple Rock Paper Scissors game created using HTML, CSS, and JavaScript. The user can click on Rock, Paper, or Scissors to play against the computer. The computer's choice is generated randomly, and the score is updated based on the outcome of each round.",
      demoLink: "https://rockpaperscissor-sigma-eight.vercel.app/",
      githubLink: "https://github.com/SakshamPhuyal/RockPaperScissor",
    },
    {
      title: "To-Do-List",
      img: "/images/ToDoList.png",
      desc: "This project is a simple To-Do List application built using HTML, CSS, and JavaScript. It allows users to add, edit, delete, and mark tasks as completed. The intuitive design and functionality make it a great tool for everyday task management.",
      demoLink: "https://to-do-list-sv3d.vercel.app/",
      githubLink: "https://github.com/SakshamPhuyal/To-Do-List",
    },
    {
      title: "Tic-Tac-Toe",
      img: "/images/TicTacToe.png",
      desc: "This is a simple Tic Tac Toe game built using HTML, CSS, and JavaScript. It allows two players to play on a grid, taking turns to place 'X' and 'O'. The game determines the winner once there is a three-in-a-row pattern.",
      demoLink: "https://tic-tac-toe-opal-one.vercel.app/",
      githubLink: "https://github.com/SakshamPhuyal/Basic-games",
    },
       {
      title: "Mobile Banking",
      img: "/images/bank.png",
      desc: "This is a simple mobile banking software developed using the C programming language. The software demonstrates basic banking functionalities and provides an interactive console interface to simulate essential banking operations.",
      demoLink: "",
      githubLink: "https://github.com/SakshamPhuyal/Banking-Software",
    },
  ];

  return (
    <div id= "projects" className="pt-16 pb-6">
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
