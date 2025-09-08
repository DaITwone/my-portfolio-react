import Navbar from "./NavBar";
import { Typewriter } from "react-simple-typewriter";
export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[700px] flex flex-col items-center">
      <div className="md:h-[510px] h-[420px] w-[370px] bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] absolute transform rotate-45 z-0 right-2 top-28 rounded-3xl"></div>
      <Navbar />
      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>
          <header>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              NGUYEN VAN DAT
            </h1>
            <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0f4a] md:text-[#c744ec] mb-2">
              <Typewriter
                words={["Frontend Developer Intern"]}
                loop={0} // 0 = loop vô hạn
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </header>
          <p className="font-mono text-base sm:text-lg md:text-lg text-gray-200 mb-6">
            Final-year student passionate about web development, seeking a
            frontend internship to apply skills and grow. Eager to learn,
            improve continuously, and become a skilled Frontend Developer with a
            view toward <br />full-stack development.
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <a href="#">
              <img
                src="/ins.png"
                alt="ins"
                className="w-6 h-6 transition duration-300 hover:scale-110 hover:opacity-80"
              />
            </a>
            <a href="#">
              <img
                src="/fb.png"
                alt="facebook"
                className="w-6 h-6 transition duration-300 hover:scale-110 hover:opacity-80"
              />
            </a>
            <a href="https://github.com/DaITwone">
              <img
                src="/github.png"
                alt="github"
                className="w-6 h-6 transition duration-300 hover:scale-110 hover:opacity-80"
              />
            </a>
            <a href="#">
              <img
                src="/tw.png"
                alt="twitter"
                className="w-6 h-6 transition duration-300 hover:scale-110 hover:opacity-80"
              />
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/1rgDFhfq9wZRuhyYzMArTTqdNAqELMenC/view?usp=sharing"
            download
          >
            <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg">
              Download CV
            </button>
          </a>
        </section>
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 flex justify-center md:justify-end mt-0"
        >
          <img
            src="/avatar.png"
            alt="Dal image"
            className="mt-5 h-[350px] w-[290px] object-cover border-9 border-purple-800 shadow-lg
             transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/80"
          />
        </figure>
      </main>
    </div>
  );
}
