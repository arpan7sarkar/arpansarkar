import WindowWrapper from "../HOC/windowWrapper";

const Terminal = () => {
  return (
    <div>
      <div id="window-header">
        <p>Window Controls</p>
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@arpan % </span>
           show tech stack
        </p>
      </div>
    </div>
  );
};
const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
