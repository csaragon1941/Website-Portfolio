import React from "react";
import userData from "@constants/data";

export default function Blog() {
  return (
    <section className="bg-[#F7F4F3] dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto h-48 bg-[#F7F4F3] dark:bg-[#1F1F1F]">
        <h1 className="text-5xl md:text-8xl font-bold py-20 text-center md:text-center">
          Blog
        </h1>
      </div>
      <div className="bg-[#F7F4F3] dark:bg-[#1F1F1F] -mt-4">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-semibold mb-4">Example Blog Post Title</h2>
          <p className="text-lg text-gray-800 dark:text-[#FFFCF2] mb-4">
            Coming Soon!
          </p>
          <p className="text-lg text-gray-800 dark:text-[#FFFCF2] mb-4">
            Under Construction
          </p>
        </div>
      </div>
    </section>
  );
}
