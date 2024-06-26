import React from "react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Economic Benefit Opportunity 'EBO'",
      description: "Senior Software Design Project",
      image: "/thumbnail/LogoDigitalWallet.png",
      link: "./digitalwallet",
    },
    {
      id: 2,
      title: "Our House - Product Management Project",
      description: "Description of Project 2",
      image: "/thumbnail/LogoOurHouse.png",
      link: "./ourhouse",
    },
    {
      id: 3,
      title: "Discord Bot",
      description: "Description of Project 3",
      image: "/thumbnail/discordbot.png",
      link: "./discordbot",
    },
    {
      id: 4,
      title: "Red Planet Hazard Hunter",
      description: "Description of Project 4",
      image: "/thumbnail/LogoMarsRover.png",
      link: "./redplanet",
    },
  ];

  return (
    <div className="bg-[#F6F5F3] dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto bg-[#F7F4F3] dark:bg-[#1F1F1F]">
        <h1 className="text-5xl md:text-7xl font-bold text-center md:text-center">
          Projects
        </h1>
      </div>
      <div className="max-w-6xl mx-auto p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 mt-20 lg:grid-cols-3 max-w-6xl mx-auto gap-20 mt-20 py-4 sm:py-4">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="text-center font-mono h-64 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg relative ">
              <Link href={project.link} passHref>
                <img
                  src={project.image}
                  alt=''
                  className="h-full w-full sm: mx-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105 "

                />

                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 py-4">
                  {project.title}
                </h3>
              </Link>

              </div>
            </div>

        
        ))}
      </div>
      </div>
    </div>
  );
}