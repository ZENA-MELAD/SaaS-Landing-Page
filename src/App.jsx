import Header from "./sections/Header/Header"
import Hero from "./sections/Hero/Hero"
import Uses from "./sections/Uses/Uses"
import WorkManagement from "./sections/WorkManagement/WorkManagement"



function App() {
 

  return (
    <div  className="overflow-x-hidden">
    <Header/>
    <Hero/>
    <WorkManagement/>
    <Uses/>
    </div>
  )
}

export default App
