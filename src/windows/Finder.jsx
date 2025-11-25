import { Search } from "lucide-react";
import WindowWrapper from "../HOC/WindowWrapper";
import { WindowControl } from "../components";
import useLocationStore from "../store/location";
import { locations } from "../constants";
import clsx from "clsx";
import useWindowStore from "../store/windows";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();
  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");

    if (item.kind === "folder") return setActiveLocation(item);

    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };
  const renderList = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active"
            )}
          >
            <img src={item.icon} alt={item.name} className="w-4" />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <div id="window-header">
        <WindowControl target="finder" />
        <Search className="icon" />
      </div>
      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Faviorites", Object.values(locations))}
          {renderList("Work", locations.work.children)}
        </div>

        <ul className="content">
          {activeLocation?.children?.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const FinderWrapper = WindowWrapper(Finder, "finder");
export default FinderWrapper;
