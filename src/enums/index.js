import { ReactComponent as StackIcon } from "../assets/svgs/stack.svg";
import { ReactComponent as GraphIcon } from "../assets/svgs/graph.svg";
import { ReactComponent as MagnetIcon } from "../assets/svgs/magnet.svg";
import { ReactComponent as MessageIcon } from "../assets/svgs/message.svg";
import { ReactComponent as AudienceIcon } from "../assets/svgs/audience.svg";
import { ReactComponent as SettingsIcon } from "../assets/svgs/settings.svg";
import { ReactComponent as DashboardIcon } from "../assets/svgs/dashboard.svg";
import { ReactComponent as BroadcastIcon } from "../assets/svgs/broadcasts.svg";
import { ReactComponent as AutomationIcon } from "../assets/svgs/automation.svg";

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
