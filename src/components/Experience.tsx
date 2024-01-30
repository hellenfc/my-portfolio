import { Divider } from '@nextui-org/react'
import Job from './Job'

export default function Experience() {
  const experience = [
    {
      work: 'Devbase',
      position: 'Frontend Engineer',
      date: 'Aug 2021 - Aug 2023',
      description: [
        'Frontend and mobile development for wellness and exercise app.',
        'Contributed to frontend development for a FinTech app.',
      ],
      tech: [
        'ReactJS',
        'NextJS',
        'React Native',
        'Typescript',
        'Tailwind',
        'SASS',
        'Redux',
        'HTML',
        'React Hook Forms',
        'Jest',
        'PubNub',
        'Figma',
        'Storybook',
      ],
    },
    {
      work: 'NativApps',
      position: 'Fullstack Developer',
      date: 'Apr 2021 - Aug 2021',
      description: [
        'Led both backend and frontend development for a medical platform, focusing on improvement and creation of components.',
      ],
      tech: [
        'ReactJS',
        'Javascript',
        'NodeJS',
        'PostgreSQL',
        'HTML',
        'SASS',
        'Formik',
      ],
    },
    {
      work: 'Rappi',
      position: 'Fullstack Developer',
      date: 'Sep 2020 - Apr 2021',
      description: [
        'Contributed to web development for growth vertical, enhancing and creating components and features for order tracking and delivery.',
      ],
      tech: [
        'ReactJS',
        'Javascript',
        'React Native',
        'HTML',
        'Styled components',
        'NextJS',
        'Figma',
      ],
    },
    {
      work: 'Baires Dev',
      position: 'Software Engineer',
      date: 'Nov 2019 - May 2020',
      description: [
        'Web Development for customer experience module in a SaaS marketing product.',
        "Component creation for internal component's library.",
      ],
      tech: ['ReactJS', 'Javascript', 'HTML', 'SASS', 'Appcues', 'Figma'],
    },
    {
      work: 'Laureate International Universities',
      position: 'Web Developer',
      date: 'Aug 2019 - Nov 2019',
      description: [
        'Backend and frontend development for Mexican College student retention program.',
      ],
      tech: [
        'ReactJS',
        'SASS',
        'HTML',
        'NodeJS',
        'GraphQL',
        'MongoDB',
        'Jest',
        'MarvelApp',
        'Storybook',
      ],
    },
    {
      work: 'Iconic',
      position: 'Web Developer',
      date: 'Aug 2018 - Aug 2019',
      description: [
        'Samsung Tizen Development for Disney Now app streaming service.',
      ],
      tech: [
        'ReactJS',
        'Redux',
        'SASS',
        'HTML',
        'Javascript',
        'Tizen',
        'Zeplin',
      ],
    },
    {
      work: 'Honduran Ministry of Development and Social Inclusion',
      position: 'Web Developer',
      date: 'Jun 2018 - Aug 2018',
      description: [
        'Managed both frontend and backend development, along with client communication and requirement elicitation.',
        'Design, analysis, and development of internal and external funds module and management system.',
      ],
      tech: ['NodeJS', 'Express', 'PugJS', 'DevExtreme', 'SQLServer'],
    },
    {
      work: 'Agile Solutions',
      position: 'Web Developer',
      date: 'Feb 2017 - Apr 2018',
      description: [
        'Executed both frontend and backend development for various projects, including tasks, events, forms, and web page sections for a tax collection company.',
        'Contributed to the creation of components for a CMS system.',
        'Modules and flow creation for real estate selling system.',
      ],
      tech: [
        'SAPUI5',
        'Javascript',
        'HTML',
        'CSS',
        'VueJS',
        'Semantic UI',
        'LESS',
        'FeathersJS',
        'NodeJS',
        'MongoDB',
      ],
    },
    {
      work: 'Minister Business Hotel',
      position: 'Web and Mobile Developer Intern',
      date: 'Mar 2016 - Aug 2016',
      description: [
        'Executed both frontend and backend development for various projects, including tasks, events, forms, and web page sections for a tax collection company.',
        'Contributed to the creation of components for a CMS system.',
        'Modules and flow creation for real estate selling system.',
      ],
      tech: ['ThreeJS', 'Angular', 'Javascript', 'NativeScript', 'MaterialUI'],
    },
  ]
  return (
    <>
      <h2 className="text-2xl font-bold">Experience</h2>
      {experience.map((item, index) => {
        return (
          <>
            <Job
              work={item.work}
              position={item.position}
              description={item.description}
              date={item.date}
              tech={item.tech}
              key={item.work}
            />
            {index !== experience.length - 1 && <Divider />}
          </>
        )
      })}
    </>
  )
}
