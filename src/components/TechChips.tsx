import { Chip } from '@nextui-org/react'

interface Props {
  tech: string[]
}
export default function TechChips({ tech }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((item, index) => {
        return (
          <Chip
            variant="flat"
            classNames={{
              base: 'bg-zinc-200 ',
              content: 'text-sky-900',
            }}
            key={item + index}
          >
            {item}
          </Chip>
        )
      })}
    </div>
  )
}
