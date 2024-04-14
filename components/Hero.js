import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  return (
    <div className="container flex flex-col lg:flex-row mx-auto md:mx-20 items-center justify-center md:justify-between">
      {/* Text container */}
      <div className="hero-info pb-2 md:pb-0 px-4 md:px-10">
        <h1 className="text-4xl lg:text-5xl">
          Hi, <br /> I am Christina Aragon <br />
        </h1>
        <div style={{ position: 'relative' }}>
          <RoughNotationGroup show={true}>
            <RainbowHighlight color={"#60A5FA"} darkColor={"#FFD166"} isDarkMode={true}>
              <h1 className="flex px-2 mx-auto text-4xl md:text-3xl font-semibold text-black dark:text-white my-2">
                SAFe® 6 Product Manager
              </h1>
            </RainbowHighlight>
          </RoughNotationGroup>
        </div>
        {/* Button */}
        <div className="flex justify-center py-5 mt-4">
          <a href="/ca-resume-april.pdf" target="_blank" rel="noopener noreferrer">
            <button className="border-2 border-indigo-400 hover:border-indigo-600 bg-transparent text-black dark:text-white font-bold py-2 px-4 rounded dark:bg-transparent dark:border-indigo-400 hover:border-indigo-200">
              My Resume!
            </button>
          </a>
        </div>
      </div>

      {/* Image container */}
      <div className="w-full px-10 md:w-1/3 flex flex-col items-center justify-center md:justify-center">
        <img
          src={userData.avatarUrl}
          alt="avatar"
          className="shadow rounded-full"
          style={{ maxWidth: "200px", width: "100%", height: "auto" }}
        />
        <div className="flex flex-row space-x-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-90deg-up"
            viewBox="0 0 16 16"
          >
            {/* SVG path data */}
          </svg>
        </div>
      </div>
    </div>
  );
}
