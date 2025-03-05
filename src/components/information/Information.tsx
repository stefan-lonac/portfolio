import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'

function Information() {
  return (
    <section
      className="flex justify-center items-center min-h-screen md:flex-row flex-col gap-10"
      id="Home"
    >
      <div className="">
        <div className="relative aspect-square w-64 mx-auto">
          <img
            src="./src/assets/img/profile-picture.jpg"
            alt="Profile Picture"
            className="w-full h-full object-cover rounded-full border-4 border-android-light dark:border-python-light shadow-xl"
          />
        </div>
      </div>

      <div className="flex items-center flex-col md:items-start">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-600">
          Stefan Lončarić
        </h1>
        <h3 className="text-gray-400 text-2xl font-bold lg:text-3xl">
          Web developer
        </h3>
        <div className="flex mt-5">
          <a
            href="mailto:loncaric.stefan@gmail.com"
            className="flex justify-center items-center rounded-md gap-2 text-md font-medium leading-4 text-stone-50 transition-all bg-cyan-700 hover:bg-cyan-800 p-3"
          >
            <IoMailOutline size={18} />
            loncaric.stefan@gmail.com
          </a>
        </div>
        <div className="flex gap-5 mt-5">
          <a
            href="https://github.com/stefan-lonac"
            target="_blanc"
            className="flex justify-center items-center gap-2 rounded-md border-stone-900 border border-solid dark:border-none text-md font-medium leading-4 text-stone-900 transition-all bg-stone-50 hover:bg-stone-300 p-3"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/stefan-loncaric/"
            target="_blanc"
            className="flex justify-center items-center rounded-md gap-2 text-md font-medium leading-4 text-stone-50 transition-all bg-[#0a66c2] hover:bg-[#004182] p-3"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Information
