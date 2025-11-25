import React from "react";
import WindowWrapper from "../HOC/WindowWrapper";
import { socials } from "../constants";
import { WindowControl } from "../components";
const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControl target="contact" />
        <h2>Contact Me </h2>
      </div>
      <div className="p-5 space-y-5">
        <img
          src="https://avatars.githubusercontent.com/u/183686025?v=4"
          alt="Arpan"
          className="w-20 rounded-full"
        />

        <h3>Let's connect</h3>
        <p>Want to collabrate to create a master piece? Or just wana chat?I'm here</p>

        <ul>
          {socials.map(({ id, text,bg, icon, link }) => (
            <li key={id} style={{backgroundColor:bg}}>
              <a href={link} target="_blank" rel="noreferrer noopenner">
                <img src={icon} className="size-5" alt={text} />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
