import { ScrollViewComponent } from '../shared/ScrollViewComponent'
import Education from './education/Education'
import Job from './job/Job'

function PersonalCareer() {
  const { ref, isVisible } = ScrollViewComponent()

  const guideIcon = {
    classes:
      'rounded-md p-2 border border-cyan-600 text-cyan-600 dark:bg-gray-800 bg-gray-100  z-10',
    size: 40,
    spacing: 35,
  }

  return (
    <section
      ref={ref}
      className={`career max-w-5xl mx-auto py-20 transition-all	duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      id="Career"
    >
      <h2 className="text-3xl text-center font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-600">
        Personal career
      </h2>
      <div className="flex flex-col items-center gap-10 relative mt-[60px]">
        <div className="absolute w-full h-full  flex flex-col-reverse items-center">
          <span className="bg-slate-100 h-full w-[2px] inset-x-0 mr-auto ml-auto"></span>
        </div>

        <Job
          sizeIcon={guideIcon.size}
          spacingIcon={guideIcon.spacing}
          classes={guideIcon.classes}
        />
        <Education
          sizeIcon={guideIcon.size}
          spacingIcon={guideIcon.spacing}
          classes={guideIcon.classes}
        />
      </div>
    </section>
  )
}

export default PersonalCareer
