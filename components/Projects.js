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
      image: "/thumbnail/DcBot.png",
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
    <div className="bg-[#f4f3ee] dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-20 mt-10">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="text-center h-64 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg relative ">
              <Link href={project.link} passHref>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"

                />

                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 py-2">
                  {project.title}
                </h3>
              </Link>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
}