import React, { useState } from "react";
import Timeline from "../timeline/Timeline";

export default function About() {
  const [showTimeline, setShowTimeline] = useState(false);

  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
             h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px]
             bg-gradient-to-l from-[#2160b8] to-[#8eb2ec]
             rotate-12 z-0 rounded-full
             transition-transform duration-500 ease-in-out hover:rotate-[20deg] hover:scale-105"
          />

          <img
            src="/ppp1.png"
            alt="about picture 1"
            className="absolute -top-2 left-5 sm:left-10 transform -translate-y-12 z-20 w-24 h-24 sm:w-52 sm:h-42
             transition-transform duration-300 ease-in-out hover:scale-110"
          />

          <img
            src="/dal.JPG"
            alt="about picture 2"
            className="relative z-10 w-30 h-44 sm:w-44 sm:h-60 md:w-72 md:h-96 rounded-4xl shadow-lg
             transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-indigo-400/50"
          />

          <img
            src="/ppp2.png"
            alt="about picture"
            className="absolute bottom-0 right-5 sm:right-10 transform translate-y-12 z-10 w-20 h-20 sm:w-50 sm:h-42
             transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </figure>

        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#6CA7F5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>

          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-8xl text-blue-400">About</span> Me
            </h1>
          </header>

          <p className="font-mono text-base sm:text-sm md:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed ">
            As a passionate and motivated final-year student with a growing
            foundation in web development, I’m seeking a frontend development
            internship where I can apply technical skills I have learned,
            combined with my real-world experience. I’m a disciplined and
            responsible person with strong attention to detail and a positive
            attitude toward learning from colleagues in the workplace who can
            guide and support me to grow and prepare for my future as a
            professional developer. 
            <br /><br />
            My primary goal is to become a skilled
            Frontend Developer within the next year. I always try to acquire and
            update knowledge for self-development, with further learning toward
            full-stack development.
          </p>

          <footer>
            <button
              onClick={() => setShowTimeline(true)}
              className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#4248e8] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg"
            >
              View more
            </button>
          </footer>
        </article>
      </div>

      {/* Modal Overlay */}
      {showTimeline && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          {/* Nền mờ */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setShowTimeline(false)}
          ></div>

          {/* Khung nội dung */}
          <div className="relative bg-black rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10 p-6 modal-content">
            {/* Nút X */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={() => setShowTimeline(false)}
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-6 text-black">My Journey</h2>
            <Timeline />
          </div>
        </div>
      )}
    </section>
  );
}
