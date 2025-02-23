
import styles from './App.module.css'
import { Navbar } from './componets/Navbar/Navbar'
import { Hero } from './componets/Hero/Hero'
import { About } from './componets/About/About'
import { Experience } from './componets/Experiences/Experiences'
import { Competence } from './componets/Competence/Competence'
import { Project } from './componets/Projects/Projects'
import { Contact } from './componets/Contact/Contact'
function App() {

  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Competence></Competence>
      <Project></Project>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  )
}

export default App
