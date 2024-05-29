import { ReactComponent as LinksLibraryIcon } from "../../assets/svgs/links-library.svg";
import { ReactComponent as JsonGeneratorIcon } from "../../assets/svgs/json-generator.svg";
import { ReactComponent as MessengerCodeIcon } from "../../assets/svgs/messenger-code.svg";
import { ReactComponent as CheckboxPluginIcon } from "../../assets/svgs/checkbox-plugin.svg";
import { ReactComponent as PostEngagementIcon } from "../../assets/svgs/post-engagement.svg";
import { ReactComponent as SendToMessengerIcon } from "../../assets/svgs/send-to-messenger.svg";

const CAPTURE_TOOLS_OPTION = [
  {
    label: "Links Library",
    url: "/links-library",
    svg: <LinksLibraryIcon />,
  },
  {
    label: "JSON Generator",
    url: "json-generator",
    svg: <JsonGeneratorIcon />,
  },
  {
    label: "Checkbox Plugin",
    url: "checkbox-plugin",
    svg: <CheckboxPluginIcon />,
  },
  {
    label: "Messenger Code",
    url: "messenger-code",
    svg: <MessengerCodeIcon />,
  },
  {
    label: "Post Engagement",
    url: "post-engagement",
    svg: <PostEngagementIcon />,
  },
  {
    label: "Send To Messenger",
    url: "send-to-messenger",
    svg: <SendToMessengerIcon />,
  },
];

const LeftContent = () => {
  return (
    <div className="p-2 bg-white rounded-2xl col-span-2 px-6 max-h-min">
      <h4 className="px-4 py-2 text-[#b0b8c3] text-sm font-bold">Capture Tools</h4>
      <div className="flex flex-col">
        {CAPTURE_TOOLS_OPTION.map((el) => {
          return (
            <a href={el.url} className="text-sm px-4 py-2 rounded-lg hover:bg-[#d7dce1] duration-200 ease-in-out transition-all">
              <div className="flex items-center gap-1">
                {el.svg}
                <span className="text-[#0e1a44]">&nbsp;{el.label}</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default LeftContent;
