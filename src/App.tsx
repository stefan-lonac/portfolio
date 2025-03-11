import './App.css'
import AboutMe from './components/about-me/AboutMe'
import Header from './components/header/Header'
import Information from './components/information/Information'
import PersonalCareer from './components/personal-career/PersonalCareer'
import Projects from './components/projects/Projects'
import ThemeToggle from './components/themeToggle/ThemeToggle'

function App() {
  return (
    <>
      <Header />
      <main className="mx-[auto] px-6 w-[100%] md:max-w-screen-md lg:max-w-screen-xl">
        <Information />
        <AboutMe />
        <Projects />
        <PersonalCareer />
      </main>
      <div className="md:hidden block fixed bottom-10 right-10 dark:border border-stone-500 dark:bg-slate-700 dark:hover:bg-cyan-800 w-15 h-15 rounded-md">
        <ThemeToggle classNames="w-full h-full rounded-md" />
      </div>
    </>
  )
}

export default App
