import { ReactComponent as StackIcon } from "../assets/svgs/stack.svg";
import { ReactComponent as GraphIcon } from "../assets/svgs/graph.svg";
import { ReactComponent as MagnetIcon } from "../assets/svgs/magnet.svg";
import { ReactComponent as MessageIcon } from "../assets/svgs/message.svg";
import { ReactComponent as AudienceIcon } from "../assets/svgs/audience.svg";
import { ReactComponent as SettingsIcon } from "../assets/svgs/settings.svg";
import { ReactComponent as DashboardIcon } from "../assets/svgs/dashboard.svg";
import { ReactComponent as BroadcastIcon } from "../assets/svgs/broadcasts.svg";
import { ReactComponent as AutomationIcon } from "../assets/svgs/automation.svg";

import { ReactComponent as LinksLibraryIcon } from "../assets/svgs/links-library.svg";
import { ReactComponent as JsonGeneratorIcon } from "../assets/svgs/json-generator.svg";
import { ReactComponent as MessengerCodeIcon } from "../assets/svgs/messenger-code.svg";
import { ReactComponent as CheckboxPluginIcon } from "../assets/svgs/checkbox-plugin.svg";
import { ReactComponent as PostEngagementIcon } from "../assets/svgs/post-engagement.svg";
import { ReactComponent as SendToMessengerIcon } from "../assets/svgs/send-to-messenger.svg";

export const SIDEBAR_MENU = [
  {
    label: "Automation",
    url: "/automation",
    component: <DashboardIcon />,
  },
  {
    label: "Audience",
    url: "/audience",
    component: <AudienceIcon />,
  },
  {
    label: "Messager",
    url: "/message",
    component: <MessageIcon />,
  },
  {
    label: "Capture Tools",
    url: "/capture-tools",
    component: <MagnetIcon />,
  },
  {
    label: "Broadcasts",
    url: "/broadcasts",
    component: <BroadcastIcon />,
  },
  {
    label: "Automation",
    url: "/automation",
    component: <AutomationIcon />,
  },
  {
    label: "Stack",
    url: "/stack",
    component: <StackIcon />,
  },
  {
    label: "Graph",
    url: "/graph",
    component: <GraphIcon />,
  },
  {
    label: "Settings",
    url: "/settings",
    component: <SettingsIcon />,
  },
];

export const CAPTURE_TOOLS_OPTION = [
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

export const MOCK_TABLE_DATA = [
  {
    name: "Quality",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: "messenger",
  },
  {
    name: "Branding",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: "instagram",
  },
  {
    name: "Data",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: "messenger",
  },
  {
    name: "Mobility",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: "messenger",
  },
  {
    name: "Quality",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: "instagram",
  },
  {
    name: "Applications",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: "messenger",
  },
  {
    name: "Interactions",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: "instagram",
  },
  {
    name: "Branding",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: "instagram",
  },
  {
    name: "Paradigm",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: "messenger",
  },
  {
    name: "Markets",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: "instagram",
  },
];
