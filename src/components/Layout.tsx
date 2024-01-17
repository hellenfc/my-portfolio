import { Avatar, Link } from '@nextui-org/react'
import Projects from './Projects'
import Experience from './Experience'

export default function Layout() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[900px]">
      <div className="flex flex-col items-center justify-center py-12 space-y-6 space-x-9 bg-gray-100 dark:bg-gray-800">
        <Avatar
          isBordered
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Hellen Fiallos</h1>
          <p className="text-gray-500 dark:text-gray-400">Software Engineer</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">About Me</h2>
            <p className="text-gray-500 dark:text-gray-400">
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
              <p className="text-gray-500 dark:text-gray-400">
                Email: hellenfc93@gmail.com
              </p>
              <p>LinkedIn</p>
              <p>Github</p>
            </div>
          </div>
          <div className="space-y-2 ">
            <h2 className="text-xl font-bold">CV</h2>
            <Link>PDF</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-12 space-y-6">
        <Experience />
        <Projects />
      </div>
    </div>
  )
}
