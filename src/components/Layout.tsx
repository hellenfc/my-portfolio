import {Link} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";

export default function Layout() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex flex-col items-center justify-center py-12 space-y-6 bg-gray-100 dark:bg-gray-800">
      <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              {/* <img
          alt="Profile Picture"
          className="rounded-full object-cover"
          height="200"
          src="/placeholder.svg"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width="200"
        /> */}
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold underline">John Doe</h1>
          <p className="text-gray-500 dark:text-gray-400">Software Engineer</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">About Me</h2>
            <p className="text-gray-500 dark:text-gray-400">
              I'm a full stack developer with a passion for creating scalable and efficient web applications.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Contact</h2>
            <p className="text-gray-500 dark:text-gray-400">Email: johndoe@example.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-12 space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-gray-500 dark:text-gray-400">A collection of my work</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Project 1</h2>
            <p className="text-gray-500 dark:text-gray-400">A brief description of Project 1.</p>
            <Link className="underline" href="#">
              View Details
            </Link>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Project 2</h2>
            <p className="text-gray-500 dark:text-gray-400">A brief description of Project 2.</p>
            <Link className="underline" href="#">
              View Details
            </Link>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Project 3</h2>
            <p className="text-gray-500 dark:text-gray-400">A brief description of Project 3.</p>
            <Link className="underline" href="#">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

