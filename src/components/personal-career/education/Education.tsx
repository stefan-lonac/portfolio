import { BsBuildings } from 'react-icons/bs'
import { SlGraduation } from 'react-icons/sl'
import { EDUCATION } from '../personal-career.const'
import { IconStatesType } from '../icon-states-type'

function Education({ sizeIcon, spacingIcon, classes }: IconStatesType) {
  return (
    <>
      <SlGraduation size={sizeIcon} spacing={spacingIcon} className={classes} />
      {EDUCATION.map((edu) => {
        return (
          <article
            key={edu.title}
            className="w-full flex flex-col p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl border border-gray-200/50 hover:border-stone-200 dark:border-gray-700/50 dark:hover:border-cyan-500	transition-all  overflow-hidden animate-fade-in"
          >
            <div className="flex flex-col gap-2">
              <div className="flex sm:mb-0 sm:flex-row sm:justify-between flex-col items-start gap-3 mb-4">
                <h3 className="text-xl font-bold text-cyan-500 dark:text-cyan-600">
                  {edu.title}
                </h3>
                <span className="text-sm font-medium transition-all px-4 py-1 rounded-3xl dark:border-none bg-stone-100 text-cyan-500 dark:text-cyan-600 dark:bg-slate-800">
                  {edu.eduType}
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <p className="flex items-center gap-2">
                  <span>{edu.graduate}</span>
                </p>
              </div>

              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <BsBuildings />
                <p className="flex items-center gap-2">
                  <span>{edu.date}</span>
                </p>
              </div>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default Education
