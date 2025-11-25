import React from "react";
import { locations } from "../constants";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "../store/windows";
import useLocationStore from "../store/location";
const projects = locations.work?.children ?? [];
const Home = () => {
    const {setActiveLocation} = useLocationStore();
    const {openWindow} = useWindowStore();
    const handleOpenProject=(project)=>{
        setActiveLocation(project);
        openWindow("finder");
    }
    useGSAP(() => {
        Draggable.create(".folder")
    },[])
  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
          onClick={()=>handleOpenProject(project)}
           key={project.id} className={clsx("group folder ",project.windowPosition)}>
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
