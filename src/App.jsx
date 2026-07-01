import { Navbar } from "./Layout/Navbar"
import { About } from "./Section/About"
import { Contact } from "./Section/Contact"
import { Experience } from "./Section/Experience"
import { Hero } from "./Section/Hero"
import { Projects } from "./Section/Projects"
import { Testimonials } from "./Section/Testimonials"

function App() {
 
  return (
   <div className="min-h-screen overflow-x-hidden">
    <Navbar/>
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      {/* <Testimonials/> */}
      <Contact/>

    </main>
   </div>
  )
}

export default App
