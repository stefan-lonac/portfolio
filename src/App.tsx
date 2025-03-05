import './App.css'
import AboutMe from './components/about-me/AboutMe'
import Header from './components/header/Header'
import Information from './components/information/Information'

function App() {
  return (
    <>
      <Header />
      <main className="mx-[auto] px-6 w-[100%] md:max-w-screen-md lg:max-w-screen-xl">
        <Information />
        <AboutMe />
      </main>
    </>
  )
}

export default App
