import { useEffect, useState } from 'react'
import { GoProjectRoadmap } from 'react-icons/go'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { ScrollViewComponent } from '../shared/ScrollViewComponent'
import Project from './project/Project'
import { PROJECT_LIST } from './project/project.const'

export const ITEMS_PER_PAGE = 6
export const LOAD_STEP = 3

function Projects() {
  // const [visibilityCount, setVisibilityCount] = useState(ITEMS_PER_PAGE)
  const [filter, setFilter] = useState<string>('All')
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const [currentPage, setCurrentPage] = useState<number>(1)

  const { ref, isVisible } = ScrollViewComponent()

  // const loadMoreHandler = () => {
  //   setVisibilityCount((prevCount) =>
  //     Math.min(prevCount + LOAD_STEP, totalProjects)
  //   )
  // }

  // const loadLessHandler = () => {
  //   setVisibilityCount((prevCount) =>
  //     Math.max(prevCount - LOAD_STEP, ITEMS_PER_PAGE)
  //   )
  // }

  const setFilterHandler = (value: string) => {
    setFilter(value)
    setActiveFilter(value)
  }

  const setFilterReset = () => {
    setFilter('All')
    setActiveFilter('All')
  }

  const allowedTechnologies = [
    'Angular',
    'WordPress',
    'WooCommerce',
    'JavaScript',
    'TypeScript',
    'PHP',
    'jQuery',
  ]

  const filterProjectList = [
    ...new Map(
      PROJECT_LIST.flatMap((project) => {
        return project.technologies.map((tech) => [tech.title, tech])
      })
    ).values(),
  ].filter((tech) => allowedTechnologies.includes(tech.title))

  useEffect(() => {
    setCurrentPage(1)
  }, [filter])

  const filteredProjects =
    filter === 'All'
      ? PROJECT_LIST
      : PROJECT_LIST.filter((project) =>
          project.technologies.some((tech) => tech.title === filter)
        )

  const totalProjects = filteredProjects.length
  const totalPages = Math.ceil(totalProjects / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE

  const paginatedProjects = filteredProjects.slice(startIndex, endIndex)

  return (
    <section
      ref={ref}
      className={`projects max-w-5xl mx-auto py-20 transition-all	duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      id="Projects"
    >
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
            className={`flex items-center gap-2 transition-all px-3 py-2 rounded-2xl dark:border-none bg-stone-100 hover:bg-stone-200 text-stone-900 dark:text-stone-50 dark:bg-slate-700 dark:hover:bg-cyan-800 ${
              activeFilter === 'All'
                ? 'ring-2 ring-indigo-600 dark:ring-cyan-500'
                : ''
            }`}
            onClick={setFilterReset}
          >
            <span className="text-sm	text-stone-900 dark:text-stone-50">
              All
            </span>
          </button>
          {filterProjectList.map((tech) => {
            const IconComponent = tech.icon
            return (
              <button
                className={`flex items-center gap-2 transition-all px-3 py-2 rounded-2xl dark:border-none bg-stone-100 hover:bg-stone-200 text-stone-900 dark:text-stone-50 dark:bg-slate-700 dark:hover:bg-cyan-800 animate-fade-in ${
                  activeFilter === tech.title
                    ? 'ring-2 ring-indigo-600 dark:ring-cyan-500'
                    : ''
                }`}
                key={tech.title}
                onClick={() => setFilterHandler(tech.title)}
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

        <Project data={paginatedProjects} />

        <div>
          <div className="flex items-center gap-2 mt-2 justify-center">
            {/* Previous */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-lg disabled:opacity-40"
            >
              <MdArrowBackIos className="fill-gray-900 dark:fill-white" />
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-lg ${
                  page === currentPage
                    ? 'bg-gray-900  text-white'
                    : 'bg-stone-100'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() =>
                setCurrentPage((page) => Math.min(page + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-lg disabled:opacity-40 text-black"
            >
              <MdArrowForwardIos className="fill-gray-900 dark:fill-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
