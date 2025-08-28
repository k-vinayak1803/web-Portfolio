
import '/src/Css/App.css'
import './Css/media.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Experience from './Pages/Experience'
import Projects from './Pages/Projects'

function App() {
  return (
    <>
      <Navbar />

      <div className="sections" style={{margin:'5rem 0'}}>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
      </div>
    </>
  )
}

export default App
