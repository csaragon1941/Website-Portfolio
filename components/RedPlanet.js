import React from "react";
import userData from "@constants/data";
import projectData from "@constants/project";
import RedPlanetCarousel from "./RedPlanetCarousel";

export default function RedPlanet() {
  return (
    <section className="bg-[#F7F4F3] dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto h-48 bg-[#f4f3ee] dark:bg-[#1F1F1F] flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-8xl font-bold py-3 text-center md:text-left">
          Hazard Hunter
        </h1>
        <div className="bg-[#f4f3ee] -mat-10 dark:bg-[#1F1F1F]">
          <div className="text-container max-w-6xl mx-auto">
            <p
              className="leading-loose text-2xl md:text-3xl font-semibold mx-4 text-center"
              style={{ lineHeight: "3rem" }}
            >
              Mars Rover Hazard Detection - Image Processing Project
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f4f3ee] dark:bg-[#1F1F1F] px-3">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Links and Job Opportunities */}
          <div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Tech Stack
              </h1>
                            
             {/* Picture 1 */}
             <div className="flex items-center">
                <img
                  src="tech stack/python.svg"
                  className="h-10 w-10 mx-4 my-4"
                  title="Figma"
                />
                <p className="text-sm text-gray-700 dark:text-gray-200">Python</p>
              </div>

              {/* Insert Other Pictures */}
            </div>

            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Project Links
              </h1>

              <div className="mt-4 ml-4">
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={projectData.redplanet.github}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      GitHub Repository
                    </div>
                  </a>
                </div>

                <div className="flex flex-row justify-start items-center">
                  <a
                    href={projectData.redplanet.powerpoint}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      PowerPoint Presentation
                    </div>
                  </a>
                </div>

                <div className="flex flex-row justify-start items-center">
                  <a
                    href={projectData.redplanet.nasa}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      NASA Picture Database
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="my-20">
            {/* Other content */}
            <RedPlanetCarousel />
          </div>
        </div>
      </div>

      <div className="bg-[#F7F4F3] dark:bg-[#1F1F1F] -mt-4">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-semibold mb-4">
            What is it?
            </h2>
          <p className="text-lg text-gray-800 dark:text-[#FFFCF2] mb-4">
            {projectData.redplanet.info}
          </p>
          <p className="text-lg text-gray-800 dark:text-[#FFFCF2] mb-4">
          </p>
        </div>
      </div>
    </section>
  );
}
