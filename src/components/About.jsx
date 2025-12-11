export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - IMAGE */}
        <div className="flex justify-center">
          <img
            src="/profile.png"
            alt="Shivam Maurya"
            className="rounded-full w-70 max-w-md object-cover shadow-lg 
                       hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* RIGHT SIDE - TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-center w-full">
            About Me
          </h2>

          <p className="text-lg leading-8 text-justify">
            I am a dedicated and versatile web developer with a strong
            background in designing and building dynamic, feature-rich websites
            and applications. Proficient in both the MERN stack (MongoDB,
            Express.js, React.js, Node.js) and PHP with MySQL, I specialize in
            creating high-performance solutions that fit modern business needs.
          </p>

          <p className="mt-4 text-lg leading-8 text-justify">
            With an M.Sc. in Information Technology, I have developed a deep
            understanding of software development principles and best practices.
            My expertise spans both client-side and server-side development.
          </p>

          <p className="mt-4 text-lg leading-8 text-justify">
            Beyond coding, I’m passionate about learning new technologies,
            improving my skill set, and building innovative digital solutions. I
            enjoy working in collaborative environments and turning ideas into
            reality.
          </p>
        </div>
      </div>
    </section>
  );
}
