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
} from "./windows";

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
    </main>
  );
};

export default App;
