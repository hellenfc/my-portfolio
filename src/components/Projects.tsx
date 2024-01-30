import { Link } from '@nextui-org/react'

export default function Projects() {
  return (
    <>
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid gap-4">
        <div className="flex items-center gap-2">
          {/* <CodeBracketIcon className="h-6 w-6" /> */}
          <span>Project 1</span>
        </div>
        <p className="text-slate-50 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <Link className="underline" href="#">
          View Details
        </Link>
      </div>
      <div className="grid gap-4">
        <div className="flex items-center gap-2">
          <CodeBracketIcon className="h-6 w-6" />
          <span>Project 2</span>
        </div>
        <p className="text-slate-50 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <Link className="underline" href="#">
          View Details
        </Link>
      </div>
    </>
  )
}
