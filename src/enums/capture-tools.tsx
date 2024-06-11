
import { ReactComponent as LinksLibraryIcon } from "assets/svgs/links-library.svg";
import { ReactComponent as JsonGeneratorIcon } from "assets/svgs/json-generator.svg";
import { ReactComponent as MessengerCodeIcon } from "assets/svgs/messenger-code.svg";
import { ReactComponent as CheckboxPluginIcon } from "assets/svgs/checkbox-plugin.svg";
import { ReactComponent as PostEngagementIcon } from "assets/svgs/post-engagement.svg";
import { ReactComponent as SendToMessengerIcon } from "assets/svgs/send-to-messenger.svg";

const CAPTURE_TOOLS_OPTION = [
  {
    label: "Links Library",
    url: "links-library",
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

export { CAPTURE_TOOLS_OPTION };