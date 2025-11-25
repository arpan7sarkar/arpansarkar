import gsap from "gsap";
import { Dock,Navbar ,Welcome} from "#components"
import { Draggable } from "gsap/Draggable";
import { TerminalWindow,SafariWindow , ResumeWindow} from "./windows";


gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <TerminalWindow/>
      <SafariWindow/>
      <ResumeWindow/>
    </main>
  )
}

export default App