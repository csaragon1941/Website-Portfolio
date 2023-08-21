import React from "react";
import userData from "@constants/data";
import TechStack from "./TechStack";


export default function AboutMe() {
  return (
    <section className="bg-[#F7F4F3] dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto bg-[#F7F4F3] dark:bg-[#1F1F1F]">
        <h1 className="text-5xl md:text-7xl font-bold text-center md:text-center">
          About Me
        </h1>

        <h2 className="text-1xl md:text-xl font-bold py-10 text-center md:text-center">
          “Whatever you do, always give 100% — unless you’re donating blood.” —Bill Murray
        </h2>


      </div>


      <div className="bg-[#F7F4F3] dark:bg-[#1F1F1F] px-3">
        <div className="pt-10 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Links and Job Opportunities */}
          <div>
            <h1 className="text-xl py-10 font-semibold text-gray-900 dark:text-gray-200">
              Certifications               </h1>

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
                Featured Projects
              </h1>

              {/*//proj 1*/}
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                {" "}
                <a
                  href="/aragon-resume.pdf"
                  target="__blank"
                  className="text-gray-800  border-gray-800 dark:border-gray-300 font-mono dark:text-gray-300"
                >
                  NFC Application
                </a>{" "}
                <a className="my-4">&rarr;  {/*//ARROW*/}
                </a>
              </p>
              {/*//END proj 1*/}

              {/*//proj 2*/}
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                {" "}
                <a
                  href="/aragon-resume.pdf"
                  target="__blank"
                  className="text-gray-800  border-gray-800 dark:border-gray-300 font-mono dark:text-gray-300"
                >
                  Discord Bot
                </a>{" "}
                <a className="my-4">&rarr;  {/*//ARROW*/}
                </a>
                {/*//END proj 2*/}

                {/*//proj 3*/}
                <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                  {" "}
                  <a
                    href="/aragon-resume.pdf"
                    target="__blank"
                    className="text-gray-800  border-gray-800 dark:border-gray-300 font-mono dark:text-gray-300"
                  >
                    Mars Rover
                  </a>{" "}
                  <a className="my-4">&rarr; {/*//ARROW*/}
                  </a>
                  {/*//END proj 3*/}


                </p>
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

                    <div className="mt-4text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
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

                    <div className="mt-4 text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
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

                    <div className="mt-4 text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
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
            <h1 className="font-bold text-3xl text-center my-8">
              Overview
            </h1>

            <p className="item-center py-2">Hey there, I'm Christina Aragon! I've recently graduated from university, and the journey has been a rollercoaster, complete with natural disasters, a pandemic, and a series of discoveries. It's been filled with both mind-bending challenges and heartwarming connections!</p>
            <p className="item-center py-2">I thrive on cracking complex problems while bringing diverse minds together. Crafting software solutions isn't just about code; it's about understanding the heartbeat of businesses and creating experiences that truly resonate.</p>
            <p className="item-center py-2">During my time in college, I wanted to get involved as much as possible. I dove headfirst into Alpha Chi Omega, where I undertook the role of Public Relations & Marketing for a year while also volunteering at the Abuse Counseling and Treatment center. Alongside my involvement in Alpha Chi, I stayed engaged with the "Women in STEM Club" and the "Software Engineering Club"—spaces where I soaked up knowledge like a sponge.</p>
            <p className="item-center py-2">When I'm not deep in tech, you'll find me on a pickleball court, getting lost in Animal Crossing, or embarking on spontaneous adventures to explore new places. Plus, I'm a self-proclaimed foodie, always on the hunt for something new to try!</p>
            <p className="item-center py-2">Throughout my professional experience, my journey has been an exciting whirlwind. At Intevations LLC, I worked on a variety of projects—I helped digitize certain benefit programs such as food stamps, delved into User Research, and meticulously crafted product requirements. These experiences weren't just boxes to check; they were lessons that shaped me into a dynamic professional.</p>
            <p className="item-center py-2">Armed with a toolbox of experience and fueled by a passion for innovation, I'm here to create awesome products while continuously growing and learning within the field! For more details, explore further on this page!</p>
            <p className="item-center py-2">Warmly,</p>
            <p className="item-center ">Christina</p>

            <div className="bg-[#F7F4F3] -mt-10 dark:bg-[#1F1F1F]">
              <div className="text-container text-center max-w-6xl mx-auto pt-20">
                <p
                  className="leading-loose text-2xl md:text-3xl font-mono mx-4 my-5"
                  style={{ lineHeight: "3rem" }}
                >
                  {userData.about.title} Currently working on <br />  {" "}
                  <a
                    className="bg-[#10B981] dark:bg-[#F3F5F7] rounded-md px-2 py-1 text-white dark:text-[#6C5B4B]"
                    href={userData.about.currentProjectUrl}
                  >
                    {userData.about.currentProject}
                  </a>
                </p>

                <p className="mt-4">
                  <a href="/projects" target="_blank" rel="noopener noreferrer">
                    <button className="border-2 border-[#14B8A6] hover:border-[#0E8173] bg-transparent text-black dark:text-white font-bold py-2 px-4 rounded dark:bg-transparent dark:border-indigo-400 hover:border-indigo-200">
                      View All Projects!
                    </button>
                  </a>
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>


      <div className=" my-10">
        <h1 className="text-6xl font-semibold text-center">
          Specialties
        </h1>
      </div>


      {/*Box 1*/}
      <div className="bg-white  rounded-xl shadow-md px-6 py-4 text-gray-700 mb-4 dark:bg-gray-800 dark:text-gray-300 mx-auto transform transition-transform duration-500 hover:scale-105" style={{ maxWidth: "60rem", border: "2px solid #FFA500" }}>
        <h1 className="text-3xl font-bold flex justify-center">
          Product
        </h1>
        <p className="mt-5 text-md text-center">
          Combining my distinct personality with strong technical skills, I am dedicated to making a substantial impact in this field. My accomplishments include obtaining SAFe 5/6 PO/PM Certification as well as Coursera Certifications in "Introduction to Software Product Management" and "Client Needs and Software Requirements" from the University of Alberta.
        </p>
        <p className="mt-5 text-center"> I have transformed my knowledge into tangible outcomes at Intevations LLC by conducting User Research, developing a Mobile Application, and meticulously crafting comprehensive Requirements for upcoming projects. These experiences fuel my pursuit of excellence in every professional endeavor.</p>

        <p className="py-3 flex justify-center">
          <span className="text-lg font-semibold pr-2">Tools I Use:</span>
          <span>Notion, Jira, Confluence, G Suite</span>
        </p>

        <p className="py-2 flex justify-center">
          <span className="text-lg font-semibold pr-2">Other Tools:</span>
          <span>Figma, Adobe Creative Cloud, Autodesk Inventor</span>
        </p>
      </div>
      {/* END Box 1 */}

      {/*Box 2*/}
      <div className="bg-white rounded-xl shadow-md px-6 py-4 text-gray-700 mb-4 dark:bg-gray-800 dark:text-gray-300 mx-auto transform transition-transform duration-500 hover:scale-105" style={{ maxWidth: "60rem", border: "2px solid #FF69B4" }}>
        <h1 className="text-3xl font-bold flex justify-center">
          Front-End Developer
        </h1>
        <p className="mt-5 text-md text-center">
          On my free time I enjoy creating fun products that are functional and creative while being able to use critical thinking and problem-solving skills. Currently I am learning lots about Back-End Development and how to make an E-Commerce Site along with implementing/learning more about API's.
        </p>

        <p className="py-3 flex justify-center">
          <span className="text-lg font-semibold pr-2">What was I Exposed to:</span>
          <span>JavaScript, CSS</span>
        </p>

        <p className="py-2 flex justify-center">
          <span className="text-lg font-semibold pr-2">Other Dev Tools:</span>
          <span>Tailwind.css, React, Node.js, Next.js</span>
        </p>
      </div>
      {/* END Box 2*/}

      {/*Box 3*/}
      <div className="bg-white rounded-xl shadow-md px-6 py-4 text-gray-700 mb-4 dark:bg-gray-800 dark:text-gray-300 mx-auto transform transition-transform duration-500 hover:scale-105" style={{ maxWidth: "60rem", border: "2px solid #8A2BE2" }}>
        <h1 className="text-3xl font-bold flex justify-center">
          Software Engineering Student
        </h1>
        <p className="mt-5 text-md text-center">
          My time in school was an incredible journey. I feel lucky to have been exposed to a wide array of experiences both within and outside the campus. Engaging in various activities on and off campus, I volunteered at the Abuse Counseling and Treatment center while also being actively involved in Alpha Chi Omega, where I held an executive position. Furthermore, I took part in the "Software Engineering Club" and "Women in Stem Club." My aim was to gather meaningful experiences and simultaneously dive into the rapidly evolving Tech Field.
        </p>

        <p className="py-3 flex justify-center">
          <span className="text-lg font-semibold pr-2">Languages I Speak:</span>
          <span>JavaScript, CSS</span>
        </p>

        <p className="py-2 flex justify-center">
          <span className="text-lg font-semibold pr-2">Other Dev Tools:</span>
          <span>Tailwind.css, React, Node.js, Next.js</span>
        </p>
      </div>
      {/* END Box 3*/}

    </section >
  );
};



