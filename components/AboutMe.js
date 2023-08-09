import React from "react";
import userData from "@constants/data";
import TechStack from "./TechStack";


export default function AboutMe() {
  return (
    <section className="bg-[#F7F4F3] dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto h-48 bg-[#F7F4F3] dark:bg-[#1F1F1F]">
        <h1 className="text-5xl md:text-7xl font-bold text-center md:text-center">
          About Me
        </h1>

        <h2 className="text-5xl md:text-7xl font-bold py-10 text-center md:text-center">
            

        </h2>

      </div>

      <div className="bg-[#F7F4F3] dark:bg-[#1F1F1F] px-3">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Links and Job Opportunities */}
          <div>

            <div className="flex items-center">
              <img
                src="tech stack/safe5.png"
                className="h-20 w-20 mx-4 my-4"
                title="Safe 5"
              />
              <a href="/safe5-certif.pdf" className="text-sm text-gray-500 font-mono relative overflow-hidden dark:text-gray-300 group">
                Certified SAFe® 5 Product Owner/Product Manager
                <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
              </a>
            </div>

            <div className="flex items-center">
              <img
                src="tech stack/safe6.png"
                className="h-20 w-20 mx-4 my-4"
                title="Safe 6"
              />
              <a href="/safe6-certif.pdf" className="text-sm text-gray-500 font-mono relative overflow-hidden dark:text-gray-300 group">
                Certified SAFe® 6 PO/PM Upgrade
                <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
              </a>
            </div>





            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a job currently. If you see me as a good fit,
                check my{" "}
                <a
                  href="/aragon-resume.pdf"
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV/Resume
                </a>{" "}
                and I'd love to work for you.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Social Links
              </h1>
              <div className="mt-4 ml-4">
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.linkedin}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      LinkedIn
                    </div>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.github}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      GitHub
                    </div>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={`mailto:${userData.email}`}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      Email Me!
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300"
              >
                {desc}
              </p>
            ))}

            <div className="bg-[#F7F4F3] -mt-10 dark:bg-[#1F1F1F]">
              <div className="text-container text-center max-w-6xl mx-auto pt-20">
                <p
                  className="leading-loose text-2xl md:text-3xl font-semibold mx-4 my-5"
                  style={{ lineHeight: "3rem" }}
                >
                  {userData.about.title} Currently working on <br /> {" "}
                  <a
                    className="bg-[#10B981] dark:bg-[#F3F5F7] rounded-md px-2 py-1 text-white dark:text-[#6C5B4B]"
                    href={userData.about.currentProjectUrl}
                  >
                    {userData.about.currentProject} 
                  </a>
                </p>
                <a href="/projects" target="_blank" rel="noopener noreferrer">
                  <button className="border-2 border-[#14B8A6] hover:border-[#0D9488] bg-transparent text-black dark:text-white font-bold py-2 px-4 rounded dark:bg-transparent dark:border-indigo-400 hover:border-indigo-200">
                    View More Projects!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" my-10">
        <h1 className="text-6xl font-semibold text-center">
          Tech Stack
        </h1>
        {/* Other content */}
        <TechStack />
      </div>

    </section>
  );
};



