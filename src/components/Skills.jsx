export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: "/html.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS3",
      icon: "/CSS3_logo.svg.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      icon: "/JavaScript-logo.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "BootStrap5",
      icon: "/bootstrap5.jpg",
      link: "https://getbootstrap.com/",
    },
    {
      name: "TypeScript",
      icon: "/typescript-1174965.webp",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "ReactJs",
      icon: "/React-icon.svg.png",
      link: "https://react.dev/",
    },
    { name: "MongoDB", icon: "/mongodb.png", link: "https://www.mongodb.com/" },
    { name: "NodeJs", icon: "/nodejs-logo.png", link: "https://nodejs.org/en" },
    { name: "Redux", icon: "/redux.png", link: "https://redux.js.org/" },
    { name: "ExpressJs", icon: "/express.png", link: "https://expressjs.com/" },
    { name: "GitHub", icon: "/GitHub-Mark.png", link: "https://github.com/" },
    { name: "Postman", icon: "/postman.png", link: "https://www.postman.com/" },
    { name: "MySQL", icon: "/mysql.png", link: "https://www.mysql.com/" },
    { name: "PHP", icon: "/php.png", link: "https://www.php.net/" },
  ];

  return (
    <section id="skills" className="w-full bg-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Technical Skills
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          These are the technologies and tools I frequently use in my projects.
        </p>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex flex-col items-center
                animate-fadeUp opacity-0
                neon-border rounded-full
              "
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <div
                className="
                rounded-full w-24 h-24 flex items-center justify-center 
                overflow-hidden bg-gray-900
                transition-transform duration-300
                group-hover:scale-110
              "
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
              </div>

              <span className="mt-3 text-white text-lg font-medium group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
