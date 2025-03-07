import { useState } from 'react'
import { GoProjectRoadmap } from 'react-icons/go'
import Project from './project/Project'
import { PROJECT_LIST } from './project/project.const'

function Projects() {
  const [filter, setFilter] = useState<string>('All')

  const useFilter = (value: string) => {
    setFilter(value)
  }
  const useFilterReset = () => setFilter('All')

  const filterProjectList = [
    ...new Map(
      PROJECT_LIST.flatMap((project) =>
        project.technologies.map((tech) => [tech.title, tech])
      )
    ).values(),
  ]

  return (
    <section className="projects max-w-5xl mx-auto py-20" id="Projects">
      <div className="flex flex-col items-center justify-center gap-16 mb-12">
        <div className="flex items-center gap-2">
          <GoProjectRoadmap
            size={32}
            className="text-indigo-600 dark:text-cyan-500"
          />
          <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-50">
            Projects
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
          <button
            className="flex items-center gap-2 transition-all px-3 py-2 rounded-2xl dark:border-none bg-stone-100 hover:bg-stone-200 text-stone-900 dark:text-stone-50 dark:bg-slate-700 dark:hover:bg-cyan-800"
            onClick={useFilterReset}
          >
            <span className="text-sm	text-stone-900 dark:text-stone-50">
              All
            </span>
          </button>
          {filterProjectList.map((tech) => {
            const IconComponent = tech.icon
            return (
              <button
                className="flex items-center gap-2 transition-all px-3 py-2 rounded-2xl dark:border-none bg-stone-100 hover:bg-stone-200 text-stone-900 dark:text-stone-50 dark:bg-slate-700 dark:hover:bg-cyan-800 animate-fade-in"
                key={tech.title}
                onClick={() => useFilter(tech.title)}
              >
                {IconComponent && (
                  <IconComponent className="text-indigo-600 dark:text-cyan-500" />
                )}
                <span className="text-sm	text-stone-900 dark:text-stone-50">
                  {tech.title}
                </span>
              </button>
            )
          })}
        </div>

        <Project filter={filter} />
      </div>
    </section>
  )
}

export default Projects
