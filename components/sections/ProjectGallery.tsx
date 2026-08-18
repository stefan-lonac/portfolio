'use client'

import { PROJECT_LIST } from '@/data/projects'
import { useMemo, useState } from 'react'
import { GoLinkExternal } from 'react-icons/go'
import { HiArrowPath, HiOutlineCodeBracket } from 'react-icons/hi2'
import { SiGithub } from 'react-icons/si'

const filters = [
  'All',
  'React',
  'Next.js',
  'Angular',
  'WordPress',
  'WooCommerce',
  'TypeScript',
  'PHP',
  'AI',
] as const
type ProjectFilter = (typeof filters)[number]
const initialProjectCount = 6

export function ProjectGallery() {
  const [filter, setFilter] = useState<ProjectFilter>('All')
  const [visibleCount, setVisibleCount] = useState(initialProjectCount)

  const projects = useMemo(
    () =>
      filter === 'All'
        ? PROJECT_LIST
        : PROJECT_LIST.filter((project) =>
            project.technologies.some(
              (technology) => technology.title === filter
            )
          ),
    [filter]
  )

  const selectFilter = (nextFilter: ProjectFilter): void => {
    setFilter(nextFilter)
    setVisibleCount(initialProjectCount)
  }

  return (
    <>
      <div className="project-filters" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            className={filter === item ? 'is-active' : ''}
            onClick={() => selectFilter(item)}
            aria-pressed={filter === item}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="projects-grid" aria-live="polite">
        {projects.slice(0, visibleCount).map((project, index) => {
          const ProjectIcon = project.img ?? HiOutlineCodeBracket
          return (
            <article
              className="project-card"
              key={project.title}
              style={{ animationDelay: `${(index % 6) * 60}ms` }}
            >
              <div className="project-art" aria-hidden="true">
                <span>0{index + 1}</span>
                <ProjectIcon />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.excerpt}</p>
                <ul className="tag-list" aria-label="Technologies">
                  {project.technologies.map((technology) => {
                    const TechnologyIcon = technology.icon
                    return (
                      <li key={technology.title}>
                        {TechnologyIcon ? (
                          <TechnologyIcon aria-hidden="true" />
                        ) : null}
                        {technology.title}
                      </li>
                    )
                  })}
                </ul>
                {project.linkCode || project.linkDemo ? (
                  <div className="project-links">
                    {project.linkCode ? (
                      <a
                        href={project.linkCode}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <SiGithub /> Code
                      </a>
                    ) : null}
                    {project.linkDemo ? (
                      <a
                        href={project.linkDemo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GoLinkExternal /> Live project
                      </a>
                    ) : null}
                  </div>
                ) : (
                  <span className="project-private">
                    Private production project
                  </span>
                )}
              </div>
            </article>
          )
        })}
      </div>

      {visibleCount < projects.length ? (
        <div className="center-action">
          <button
            className="button button--ghost"
            type="button"
            onClick={() =>
              setVisibleCount((count) => count + initialProjectCount)
            }
          >
            Load more <HiArrowPath aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </>
  )
}
