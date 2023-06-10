import React from "react";
import userData from "@constants/data";
import TechStack from "./TechStack";


export default function AboutMe() {
  return (
    <section className="bg-[#F7F4F3] dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto h-48 bg-[#F7F4F3] dark:bg-[#1F1F1F]">
        <h1 className="text-5xl md:text-8xl font-bold py-20 text-center md:text-center">
          About Me
        </h1>
      </div>
      <div className="bg-[#F7F4F3] -mt-10 dark:bg-[#1F1F1F]">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-3xl font-semibold mx-4 my-5"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently working on{" "}
            <a
              className="bg-[#B3C3E5] dark:bg-[#F3F5F7] rounded-md px-2 py-1 text-[#1E355C] dark:text-[#6C5B4B]"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
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

            <div className="flex flex-col justify-center items-center h-full">
              <a
                href="/projects"
                className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-[#483A33] hover:bg-[#625041] dark:bg-[#00B8AE] dark:hover:bg-[#00A39B] shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center text-center md:text-[#F7F4F3] dark:text-[#F3F7F3]"
                style={{ marginTop: "-450px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right-square"
                  stroke="4"
                  strokeWidth="4"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                  />
                </svg>
                <p>View Projects!</p>
              </a>
            </div>


          </div>
        </div>
      </div>

      <div className=" my-5">
        <h1 className="text-6xl font-semibold text-center">
          Tech Stack
        </h1>
        {/* Other content */}
        <TechStack />
      </div>

    </section>
  );
};



