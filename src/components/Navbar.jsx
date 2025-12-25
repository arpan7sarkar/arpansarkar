import dayjs from "dayjs";

import { navLinks } from "#constants";
import { navIcons } from "../constants";
import  useWindowStore  from "../store/windows";
import { AlarmClock, AlarmSmoke } from "lucide-react";


const Navbar = () => {
  const {openWindow} = useWindowStore();
  return (
    <nav>
      <div>
        <img src="./images/logo.svg" alt="logo" />
        <p className="font-bold">Arpan's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name ,type}) => (
            <li key={id} onClick={() => openWindow(type)}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img className="icon-hover" src={img} alt="icon-${id}" />
            </li>
          ))}
        </ul>
        <time dateTime="">{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;