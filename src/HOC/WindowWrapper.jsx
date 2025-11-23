import { useLayoutEffect, useRef } from "react";
import useWindowStore from "../store/windows";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey] || {
      isOpen: false,
      zIndex: 0,
    };
    const ref = useRef(null);
    // if (!isOpen) return null;

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;
      el.style.display = "block";
    }, [isOpen]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";

      gsap.fromTo(el, { opacity: 0, scale: 0.8,y:40 }, { opacity: 1, scale: 1,y:0,duration:0.4,ease:"power3.out" });

    }, [isOpen]);

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };
  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;
  return Wrapped;
};

export default WindowWrapper;
