import React from "react";

export default function Skills() {
  const skillsData = [
    {
      id: 1,
      image:
        "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png",
      title: "HTML",
    },
    {
      id: 2,
      image: "https://img.icons8.com/?size=512&id=21278&format=png",
      title: "CSS",
    },
    {
      id: 3,
      image:
        "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
      title: "JavaScript",
    },
    {
      id: 4,
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
      title: "VueJs",
    },
    {
      id: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      title: "ReactJs",
    },
    {
      id: 6,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
      title: "Tailwindcss",
    },
  ];

  const SkillBox = ({ image, title, description }) => (
    <article className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300">
      <figure className="flex justify-center mb-4">
        <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20" />
      </figure>
      <header>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      </header>
      <p className="text-gray-400 text-sm sm:text-base">{description}</p>
    </article>
  );
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10"
    >
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>
      <img
        src="/github.png"
        alt="left picture"
        className="absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70"
      />
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-20 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-6xl font-bold">
            My <span className="text-8xl text-purple-400">Skills</span>
          </h1>
          <p className="indent-8 font-mono text-base sm:text-lg md:text-lg text-gray-200 mb-6 mt-5">
            Currently growing as a frontend intern, I’m building a foundation in
            HTML, CSS, and JavaScript, while exploring frameworks like Vue.js
            and utility-first tools like Tailwind CSS, along with the React.js
            library. I’m driven by curiosity and a desire to turn ideas into
            interactive web experiences.
          </p>
        </header>
        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-4 max-w-6xl mx-auto px-4"
        >
          {skillsData.map((skill) => (
            <SkillBox
              key={skill.id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </section>
      </div>
      <img
        src="/ins.png"
        alt="Right picture"
        className="absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70"
      />
    </section>
  );
}
