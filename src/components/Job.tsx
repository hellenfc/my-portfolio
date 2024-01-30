import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

import TechChips from './TechChips'
interface Props {
  work: string
  position: string
  description: string[]
  date: string
  tech: string[]
}

export default function Job({
  work,
  position,
  description,
  date,
  tech,
}: Props) {
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-2 flex-col sm:flex-row">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faBriefcase} className="pr-2" />
          <span className="font-bold text-center ">{work}</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 font-semibold">
          {position}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{date}</p>
      </div>
      <ul>
        {description.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
      <TechChips tech={tech} />
    </div>
  )
}
