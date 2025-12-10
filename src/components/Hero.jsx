export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-4"
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Shivam Maurya</h1>
      <p className="text-xl max-w-xl">
        A passionate Full-Stack Developer who builds modern & responsive web applications.
      </p>

      <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold">
        Download Resume
      </button>
    </section>
  );
}
