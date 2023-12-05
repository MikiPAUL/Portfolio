import About from './components/About'
import ContactDetails from './components/ContactDetails'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <Hero/>
      <main>
        <About/>
        <Skills/>
        <Portfolio/>
      </main>
      <ContactDetails/>
    </>
  )
}

export default App
