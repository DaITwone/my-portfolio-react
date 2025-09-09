import Navbar from "./NavBar";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const socials = [
    { href: "#", src: "/ins.png", alt: "ins" },
    { href: "#", src: "/fb.png", alt: "facebook" },
    { href: "https://github.com/DaITwone", src: "/github.png", alt: "github" },
    { href: "#", src: "/tw.png", alt: "twitter" },
  ];

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[700px] flex flex-col items-center text-white text-lg">

      <Navbar />

      {/* Background block */}
      <div className="h-[510px] w-[370px] bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] absolute rotate-45 z-0 right-2 top-28 rounded-3xl"></div>

      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 py-24 md:py-32 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 mt-10 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {/* Circle background */}
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>

          <header>
            <h1 className="text-4xl font-bold mb-4">
              NGUYEN VAN DAT
            </h1>
            <h2 className="text-2xl font-bold text-[#c744ec] mb-2">
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

          <p className="font-mono text-gray-300 mb-6 text-base md:text-lg">
            Final-year student passionate about web development, seeking a
            frontend internship to apply skills and grow. Eager to learn,
            improve continuously, and become a skilled Frontend Developer with a
            view toward <br />
            full-stack development.
          </p>

          {/* Social icons */}
          <div className="flex items-center space-x-4 mb-6">
            {socials.map((social, index) => (
              <a key={index} href={social.href}>
                <img        
                  src={social.src}
                  alt={social.alt}
                  className="w-6 h-6 transition duration-300 hover:scale-150"
                />
              </a>
            ))}
          </div>

          {/* Download CV */}
          <a
            href="https://drive.google.com/file/d/1rgDFhfq9wZRuhyYzMArTTqdNAqELMenC/view?usp=sharing"
            download
          >
            <button className="inline-flex border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] rounded-full">
              Download CV
            </button>
          </a>
        </section>

        {/* Avatar */}
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 flex justify-center md:justify-end mt-0"
        >
          <img
            src="/avatar.png"
            alt="Dal image"
            className="mt-5 h-[350px] w-[290px] object-cover border-8 border-purple-800 shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/80"
          />
        </figure>
      </main>
    </div>
  );
}
