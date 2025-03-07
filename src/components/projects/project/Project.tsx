import { GoLinkExternal } from 'react-icons/go'
import { SiGithub } from 'react-icons/si'
import { PROJECT_LIST } from './project.const'

interface ProjectProps {
  filter: string
}

function Project({ filter }: ProjectProps) {
  const projectsData =
    filter === 'All'
      ? PROJECT_LIST
      : PROJECT_LIST.filter((filterData) =>
          filterData.technologies.some(
            (projectFilter) => projectFilter.title === filter
          )
        )

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsData.map((project) => {
        const IconComponent = project.img
        return (
          <article
            key={project.title}
            className="flex flex-col bg-white dark:bg-gray-900 hover:shadow-xl rounded-lg shadow-lg overflow-hidden animate-fade-in transition-all"
          >
            <div className="flex items-center justify-center aspect-video bg-gray-100 dark:bg-gray-800">
              {IconComponent && (
                <IconComponent
                  size="100"
                  className="text-gray-800 dark:text-gray-400"
                />
              )}
            </div>

            <div className="flex flex-col h-full gap-6 p-6">
              <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
                {project.title}
              </h3>
              <p className="text-stone-900 dark:text-stone-300">
                {project.excerpt}
              </p>
              <div className="flex gap-3 flex-wrap">
                {project.technologies.map((tech) => {
                  const IconComponent = tech.icon
                  return (
                    <span
                      className="flex items-center gap-2 transition-all px-3 py-1 rounded-2xl dark:border-none bg-stone-100 hover:bg-stone-200 text-stone-900 dark:text-stone-50 dark:bg-slate-700 dark:hover:bg-cyan-800"
                      key={tech.title}
                    >
                      {IconComponent && (
                        <IconComponent className="text-indigo-600 dark:text-cyan-500 text-sm" />
                      )}
                      <span className="text-sm	text-stone-900 dark:text-stone-50">
                        {tech.title}
                      </span>
                    </span>
                  )
                })}
              </div>
              <div className="flex gap-5 mt-auto">
                {project.linkCode && (
                  <a
                    href={project.linkCode}
                    target="_blank"
                    className="flex gap-2 items-center text-stone-900 dark:text-stone-300 group"
                  >
                    <SiGithub className="group-hover:text-cyan-500" />
                    <span className="group-hover:text-cyan-500">Code</span>
                  </a>
                )}
                {project.linkDemo && (
                  <a
                    href={project.linkDemo}
                    target="_blank"
                    className="flex gap-2 items-center text-stone-900 dark:text-stone-300 group"
                  >
                    <GoLinkExternal className="group-hover:text-cyan-500" />
                    <span className="group-hover:text-cyan-500">Demo</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Project
