import React, { useEffect, useState } from "react";
import Link from "next/link";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function LatestCode({ repositories }) {
  const [repos, setRepos] = useState(repositories);

  return (
    <section className="bg-[#F7F4F3] dark:bg-[#1F1F1F] pt-5 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:mx-10 mt-221`np0">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-[#221E1B] dark:text-[#FFFFFF] text-center lg:text-left font-bold text-brown-300 my-10 md:my-30">
              Latest Code
            </h1>
          </div>
          <div className="md:w-1/2 flex justify-center py-2">
            <a href="github.com/csaragon1941" target="_blank" rel="noopener noreferrer">
            <button className="border-2 border-indigo-400 hover:border-indigo-600 bg-transparent text-black dark:text-white font-bold py-2 px-4 rounded dark:bg-transparent dark:border-indigo-400 hover:border-indigo-200">
                GitHub Portfolio
              </button>
            </a>
          </div>
        </div>

      </div>
    <div className="py-20 md: justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20">
        {/* Single github Repo */}

        {repos &&
          repos.map((latestRepo, idx) => (
            <GithubRepoCard latestRepo={latestRepo} key="idx" />
          ))}
      </div>
    </div>

    </section>
  );
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className="github-repo">
      <h1 className="font-semibold text-xl  text-[##221E1B] dark:text-[#00CCC2] ">
        {latestRepo.name}
      </h1>
      <p className="text-base font-normal my-4 text-[#828DC4] dark:text-[#EBFFFE]">
        {latestRepo.description}
      </p>
      <a
        href={latestRepo.clone_url}
        className="font-semibold group flex flex-row space-x-2 w-full items-center text-[#485799] dark:text-[#C2FFFC]"
      >
        <p>View Repository </p>
        <div className="transform  group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </a>
    </div>
  );
};
