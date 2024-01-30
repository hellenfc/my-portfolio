import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faCopy,
  faCheck,
  faArrowRight,
  faBriefcase,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import { Link, Tabs, Tab } from '@nextui-org/react'

import Projects from './Projects'
import Experience from './Experience'
import { useState } from 'react'

export default function Layout() {
  const [copied, setCopied] = useState(false)
  const [displayExperience, setDisplayExperience] = useState(true)
  const openMail = () => {
    window.open('mailto:hellenfc93@gmail.com')
  }

  const copyText = () => {
    navigator.clipboard.writeText('hellenfc93@gmail.com')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  const openResume = () => {
    window.open(
      'https://drive.google.com/file/d/17aFDzt8zSjhWhjzQhAYaa571RlaMShfo/view?usp=sharing'
    )
  }
  return (
    <div className="h-screen w-full lg:grid lg:min-h-[600px] lg:grid-cols-2">
      <div className="flex flex-col flex-grow items-center justify-center py-12 space-y-6 px-12 bg-gradient-to-br from-sky-800 to-emerald-700 via-cyan-700 bg-[length:200%_auto] animate-gradient ">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-6xl font-bold">Hellen Fiallos</h1>
            <h2 className="text-slate-50 dark:text-gray-400 text-4xl">
              Software Engineer
            </h2>
          </div>
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
            <div className="lg:grid lg:grid-cols-3 items-center">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-slate-50 dark:text-gray-400 pr-2 cursor-pointer"
                  onClick={() => {
                    openMail()
                  }}
                />
                <p
                  className="text-slate-50 dark:text-gray-400                   hover:text-slate-200
                    cursor-pointer"
                  onClick={() => {
                    openMail()
                  }}
                >
                  hellenfc93@gmail.com
                </p>
                <div className="pl-5 text-slate-50 dark:text-gray-400 relative">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={`absolute -top-2 transition-opacity duration-300 ${
                      copied ? 'opacity-100' : 'opacity-0'
                    } `}
                  />
                  <FontAwesomeIcon
                    icon={faCopy}
                    className={`absolute -top-2 hover:text-slate-200 cursor-pointer transition-opacity duration-300 ${
                      copied ? 'opacity-0' : 'opacity-100'
                    }`}
                    onClick={() => {
                      copyText()
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-slate-50 dark:text-gray-400 pr-2"
                />
                <Link
                  isExternal
                  className="text-slate-50 dark:text-gray-400
                    "
                  href="https://www.linkedin.com/in/hellenfiallos/"
                >
                  Hellen Fiallos
                </Link>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-slate-50 dark:text-gray-400 pr-2"
                />
                <Link
                  isExternal
                  className="text-slate-50 dark:text-gray-400"
                  href="https://github.com/hellenfc"
                >
                  hellenfc
                </Link>
              </div>
            </div>
          </div>
          <p>{displayExperience}</p>

          <div
            className="flex items-center cursor-pointer"
            onClick={() => openResume()}
          >
            <h2 className="text-lg font-bold">View Full Resumé</h2>
            <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="flex flex-col items-center justify-center bg-[#ffffff] min-h-screen">
        <div className="flex w-full flex-col pt-4 ">
          <Tabs
            aria-label="Options"
            color="primary"
            variant="underlined"
            classNames={{
              tabList:
                'gap-6 w-full relative rounded-none p-0 pl-2 pr-2 border-b border-divider',
              cursor: 'w-full bg-[#075985]',
              tab: 'max-w-fit px-0 h-12',
              tabContent: 'group-data-[selected=true]:text-[#075985]',
            }}
            onSelectionChange={(key) => {
              key === 'experience'
                ? setDisplayExperience(true)
                : setDisplayExperience(false)
            }}
          >
            <Tab
              key="experience"
              title={
                <div className="flex items-center space-x-2 p-2">
                  <FontAwesomeIcon icon={faBriefcase} className="pr-2" />
                  <span>Experience</span>
                </div>
              }
            />
            <Tab
              key="projects"
              title={
                <div className="flex items-center space-x-2 p-2">
                  <FontAwesomeIcon icon={faCode} className="pr-2" />
                  <span>Projects</span>
                </div>
              }
            />
          </Tabs>
        </div>
        <div className=" overflow-auto px-12 pt-6 pb-12 space-y-9">
          {displayExperience ? <Experience /> : <Projects />}
        </div>
      </div>
    </div>
  )
}
