import gsap from "gsap";
import { Dock,Navbar ,Welcome} from "#components"
import { Draggable } from "gsap/Draggable";
import TerminalWindow from "./windows/Terminal";


gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <TerminalWindow/>
    </main>
  )
}

export default App