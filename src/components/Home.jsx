import { VscPreview } from "react-icons/vsc";
import { IoMdCloudDownload } from "react-icons/io";

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-4"
    >
      <img src="/avatar2.png" alt="Hero" className="mb-6 h-80 w-80 object-cover" />
     <h1 className="text-5xl font-bold mb-4 text-white pop3d">
  Hi, I'm Shivam Maurya
</h1>


      <p className="text-xl max-w-xl">
        A passionate Full-Stack Developer who builds modern & responsive web
        applications.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-400 hover:bg-blue-700 rounded-lg hover:cursor-pointer  text-white font-semibold">
        <IoMdCloudDownload className="inline mr-2 text-2xl" />
        Download resume
      </button>
    </section>
  );
}
