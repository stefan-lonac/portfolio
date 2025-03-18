import { BsBuildings } from 'react-icons/bs'
import { PERSONAL_CAREER } from '../personal-career.const'
import { IoCheckmark } from 'react-icons/io5'
import { SlBriefcase } from 'react-icons/sl'
import { IconStatesType } from '../icon-states-type'

function Job({ sizeIcon, spacingIcon, classes }: IconStatesType) {
  return (
    <>
      <SlBriefcase size={sizeIcon} spacing={spacingIcon} className={classes} />
      {PERSONAL_CAREER.map((job) => {
        return (
          <article
            key={job.company}
            className="w-full flex flex-col p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl border border-gray-200/50 hover:border-stone-200 dark:border-gray-700/50 dark:hover:border-cyan-500	transition-all  overflow-hidden animate-fade-in"
          >
            <div className="flex flex-col gap-2">
              <div className="flex sm:mb-0 sm:flex-row sm:justify-between flex-col items-start gap-3 mb-4">
                <h3 className="text-xl font-bold text-cyan-500 dark:text-cyan-600">
                  {job.title}
                </h3>
                <span className="text-sm font-medium transition-all px-4 py-1 rounded-3xl dark:border-none bg-stone-100 text-cyan-500 dark:text-cyan-600 dark:bg-slate-800">
                  {job.jobType}
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <BsBuildings />
                <p className="flex items-center gap-2">
                  <span>{job.company}</span>
                  <span>&bull;</span>
                  <span>{job.date}</span>
                </p>
              </div>

              <ul className="flex flex-col gap-3 mt-5">
                {job.jobDescription.map((desc) => {
                  return (
                    <li
                      key={desc}
                      className="flex items-start gap-2 text-sm text-stone-900 dark:text-stone-300"
                    >
                      <span>
                        <IoCheckmark
                          size={20}
                          spacing={10}
                          className="rounded-3xl  p-1 text-indigo-600 dark:text-cyan-500 bg-stone-100 dark:bg-cyan-950"
                        />
                      </span>
                      <span>{desc}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default Job
