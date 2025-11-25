import gsap from "gsap";
import { Dock, Navbar, Welcome } from "#components";
import { Draggable } from "gsap/Draggable";
import {
  TerminalWindow,
  SafariWindow,
  ResumeWindow,
  FinderWrapper,
  TextWindow,
  ImageWindow,
  ContactWindow,
} from "./windows";
import { Home } from "./components";

gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <TerminalWindow />
      <SafariWindow />
      <ResumeWindow />
      <FinderWrapper />
      <TextWindow />
      <ImageWindow />
      <ContactWindow />
      <Home/>
    </main>
  );
};

export default App;
