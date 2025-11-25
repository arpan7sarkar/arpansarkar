import WindowWrapper from "../HOC/WindowWrapper";
import { WindowControl } from "../components";
import useWindowStore from "../store/windows";

const Image = () => {
  const { windows } = useWindowStore();
  const { data } = windows.imgfile;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControl target="imgfile" />
        <h2>{data.name}</h2>
      </div>
      <div className="bg-white h-full overflow-y-auto flex items-center justify-center p-4">
        <img
          src={data.imageUrl}
          alt={data.name}
          className="max-w-full max-h-full object-contain shadow-lg"
        />
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;
