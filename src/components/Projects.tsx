import { Link } from '@nextui-org/react'

export default function Projects() {
  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-gray-500 dark:text-gray-400">
          A collection of my work
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Project 1</h2>
          <p className="text-gray-500 dark:text-gray-400">
            A brief description of Project 1.
          </p>
          <Link className="underline" href="#">
            View Details
          </Link>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Project 2</h2>
          <p className="text-gray-500 dark:text-gray-400">
            A brief description of Project 2.
          </p>
          <Link className="underline" href="#">
            View Details
          </Link>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Project 3</h2>
          <p className="text-gray-500 dark:text-gray-400">
            A brief description of Project 3.
          </p>
          <Link className="underline" href="#">
            View Details
          </Link>
        </div>
      </div>
    </>
  )
}
