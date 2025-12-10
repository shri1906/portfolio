export default function Projects() {
  const projects = [
    { title: "E-Commerce App", desc: "React + Node.js + MongoDB" },
    { title: "Portfolio Website", desc: "React + Tailwind CSS" },
    { title: "Admin Dashboard", desc: "React + Express + MySQL" },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
