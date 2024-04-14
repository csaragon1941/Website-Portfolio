import userData from "@constants/data";
import React from "react";

export default function Experience() {
  return (
    <section className="bg-[#F7F4F3]} dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto h-48 bg-[#F7F4F3] dark:bg-[#1F1F1F]">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left flex justify-center items-center">
          Experience
        </h1>

        <div className=" my-20">
        <h1 className="text-6xl font-semibold text-center">
          Specialties
        </h1>
      </div>


      {/*Box 1*/}
      <div className="bg-white  rounded-xl shadow-md px-6 py-4 text-gray-700 mb-4 dark:bg-gray-800 dark:text-gray-300 mx-auto transform transition-transform duration-300 hover:scale-105" style={{ maxWidth: "60rem", border: "2px solid #FFA500" }}>
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
      <div className="bg-white rounded-xl shadow-md px-6 py-4 text-gray-700 mb-4 dark:bg-gray-800 dark:text-gray-300 mx-auto transform transition-transform duration-300 hover:scale-105" style={{ maxWidth: "60rem", border: "2px solid #FF69B4" }}>
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
      <div className="bg-white rounded-xl shadow-md px-6 py-4 text-gray-700 mb-4 dark:bg-gray-800 dark:text-gray-300 mx-auto transform transition-transform duration-300 hover:scale-105" style={{ maxWidth: "60rem", border: "2px solid #8A2BE2" }}>
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


      </div>
      <div className="bg-[#F7F4F3] dark:bg-[#1F1F1F] -mt-4">
        <div className="grid grid-cols-1 dark:bg-[#1F1F1F] max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-[#00A39B] rounded-full relative z-10">
                    <div className="w-4 h-4 bg-[#00A39B] rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-[#E7E4DA] dark:bg-[#474747] rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-[#FFFFFF] dark:bg-[#3D3D3D] z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl font-bold text-[#D7D2C1] dark:text-[#474747]">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-400">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-300 my-2">{desc}</p>
    </div>
  );
};

