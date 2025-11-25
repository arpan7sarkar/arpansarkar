import WindowWrapper from "../HOC/WindowWrapper";
import { WindowControl } from "../components";
import useWindowStore from "../store/windows";

const Text = () => {
  const { windows } = useWindowStore();
  const { data } = windows.txtfile;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControl target="txtfile" />
        <h2>{data.name}</h2>
      </div>
      <div className="bg-white h-full overflow-y-auto p-8 text-gray-800">
        {data.image && (
          <img
            src={data.image}
            alt={data.name}
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
          />
        )}

        {data.subtitle && (
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-900">
            {data.subtitle}
          </h1>
        )}

        <div className="max-w-2xl mx-auto space-y-4">
          {data.description?.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
