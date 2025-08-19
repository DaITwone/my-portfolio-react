const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
      <div className="relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-90"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[190px] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
              Live Preview
            </button>
          </a>
        </figure>
        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-x1 nb-2">{title}</h3>
            <p className="text-gray-500 text-base">{description}</p>
          </header>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const listProjects = [
    {
      image: "/p1.png",
      title: "Portfolio Website VueJS",
      description: "Built with Vue.js, featuring dark/light mode, router, and responsive design.",
      link: "https://my-portfolio-web-847eb.web.app/summary",
    },
    {
      image: "/p2.png",
      title: "Portfolio Website ReactJS",
      description: "Build with ReactJS, using TailwindCSS, smooth AOS scroll effects, and responsive design",
      link: "",
    },
    {
      image: "/p3.png",
      title: "IT Department",
      description: "Build with Vue.js, Firebase CRUD, user auth, role-based access for admin, Vue Router, AOS scroll, and responsive design",
      link: "https://it-department-5f21c.web.app/",
    },
    {
      image: "/pj1.png",
      title: "Blog Web",
      description: "React blog with Firebase auth for login/register, AOS scroll effects.",
      link: "https://it-department-5f21c.web.app/",
    },
    {
      image: "/pj2.png",
      title: "Todo Web App",
      description: "A basic React Todo App made to practice learned skills.",
      link: "https://it-department-5f21c.web.app/",
    },
  ];
  return (
    <main id="projects" className="p-0.5">
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="text-center">
          <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
            My <span className="text-6xl text-purple-400">Projects</span>
          </h1>

          {/* <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur dolorum voluptates quis! Rem est, odit tempora porro
            veritatis tenetur illum veniam excepturi inventore, eos eum non
            voluptas dolore ut officia?
          </p> */}
        </header>
      </section>
      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex flex-wrap gap-4 justify-center mt-6"
      >
        {listProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}
