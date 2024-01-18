import Projects from './Projects'
import Experience from './Experience'

export default function Layout() {
  return (
    <div className="h-screen w-full lg:grid lg:min-h-[600px] lg:grid-cols-2">
      <div className="flex flex-col flex-grow items-center justify-center py-12 space-y-6 space-x-9 bg-gradient-to-br from-sky-700 to-emerald-700 ">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Hellen Fiallos</h1>
          <h2 className="text-slate-50 dark:text-gray-400">
            Software Engineer
          </h2>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">About Me</h2>
            <p className="text-slate-50 dark:text-gray-400">
              Systems Engineer with a passion for web development, boasting over
              six years of experience in both backend and frontend development.
              Graduated in 2016, my journey has spanned various industries, from
              education to entertainment. My primary focus lies in frontend
              development and enhancing user experiences. Dedicated to
              generating value, fostering teamwork, and maintaining a commitment
              to continuous learning.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Contact</h2>
            <div className="lg:grid lg:grid-cols-3">
              <p className="text-slate-50 dark:text-gray-400">
                Email: hellenfc93@gmail.com
              </p>
              <p>LinkedIn</p>
              <p>Github</p>
            </div>
          </div>
          <div className="space-y-2 ">
            <h2 className="text-xl font-bold">View Full Resumé</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#ffffff] min-h-screen">
        <div className=" overflow-auto p-12 space-y-9">
          <Experience />
          {/* <Projects /> */}
        </div>
      </div>
    </div>
  )
}
