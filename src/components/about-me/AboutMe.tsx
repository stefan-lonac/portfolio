import { GoPerson } from 'react-icons/go'
import { TbFileDownload } from 'react-icons/tb'
import { SKILLS_LIST } from './skills-list.const'
import { ScrollViewComponent } from '../shared/ScrollViewComponent'

function AboutMe() {
  const { ref, isVisible } = ScrollViewComponent()

  return (
    <section
      ref={ref}
      className={`about-me max-w-4xl mx-auto py-20 transition-all	duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      id="AboutMe"
    >
      <div className="flex flex-col items-center justify-center gap-6 mb-12">
        <div className="flex items-center gap-2">
          <GoPerson size={32} className="text-indigo-600 dark:text-cyan-500" />
          <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-50">
            About me
          </h2>
        </div>
        <p className="text-lg text-center text-stone-900 dark:text-stone-50">
          Experienced web developer with a strong background in web technologies
          and best design practices. Skilled in building websites and web
          applications, with a passion for solving challenges and learning new
          technologies. Comfortable working both independently and in team
          environments.
        </p>
        <a
          href="./src/assets/cv/Stefan Lončarić CV.pdf"
          target="_blank"
          className="flex justify-center items-center gap-2 text-md font-medium leading-4 transition-all p-3 rounded-md border-stone-900 border border-solid dark:border-none hover:bg-stone-200  text-stone-900 dark:text-stone-50 dark:bg-slate-700 dark:hover:bg-cyan-800"
        >
          <TbFileDownload size={18} />
          Download CV
        </a>
      </div>

      <div className="flex flex-col gap-8">
        {SKILLS_LIST.map((data, index) => {
          const IconTitleComponent = data.icon
          const skillsByCategory = data.skills.filter(
            (category) =>
              category.title.toLowerCase() === category.title.toLowerCase()
          )
          return (
            <div className="flex flex-col gap-5" key={index}>
              <h3 className="flex items-center gap-2 text-2xl text-stone-900 dark:text-stone-50">
                {IconTitleComponent && (
                  <IconTitleComponent className="text-indigo-600 dark:text-cyan-500" />
                )}
                {data.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skillsByCategory.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <div
                      className="flex items-center gap-2 transition-all px-3 py-2 rounded-2xl dark:border-none bg-stone-100 hover:bg-stone-200 text-stone-900 dark:text-stone-50 dark:bg-slate-700 dark:hover:bg-cyan-800 animate-fade-in"
                      key={index}
                    >
                      {IconComponent && (
                        <IconComponent className="text-indigo-600 dark:text-cyan-500" />
                      )}
                      <span className="text-sm	text-stone-900 dark:text-stone-50">
                        {skill.title}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default AboutMe
