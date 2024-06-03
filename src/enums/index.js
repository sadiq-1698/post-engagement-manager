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

import { ReactComponent as ProfileHomeIcon } from "../assets/svgs/profile-home.svg";
import { ReactComponent as ProfileLogoutIcon } from "../assets/svgs/profile-logout.svg";
import { ReactComponent as ProfileBillingIcon } from "../assets/svgs/profile-billing.svg";
import { ReactComponent as ProfileAccountIcon } from "../assets/svgs/profile-account.svg";

import { ReactComponent as StatusIcon } from "../assets/svgs/status.svg";
import { ReactComponent as CommunityIcon } from "../assets/svgs/community.svg";
import { ReactComponent as KnowledgeBaseIcon } from "../assets/svgs/knowledge-base.svg";

export const SIDEBAR_MENU = [
  {
    label: "Dashboard",
    url: "dashboard",
    component: <DashboardIcon />,
  },
  {
    label: "Audience",
    url: "audience",
    component: <AudienceIcon />,
  },
  {
    label: "Messager",
    url: "message",
    component: <MessageIcon />,
  },
  {
    label: "Capture Tools",
    url: "capture-tools",
    component: <MagnetIcon />,
  },
  {
    label: "Broadcasts",
    url: "broadcasts",
    component: <BroadcastIcon />,
  },
  {
    label: "Automation",
    url: "automation",
    component: <AutomationIcon />,
  },
  {
    label: "Stack",
    url: "stack",
    component: <StackIcon />,
  },
  {
    label: "Graph",
    url: "graph",
    component: <GraphIcon />,
  },
  {
    label: "Settings",
    url: "settings",
    component: <SettingsIcon />,
  },
];

export const CAPTURE_TOOLS_OPTION = [
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

export const PROFILE_DROPDOWN_OPTIONS = [
  {
    url: "/",
    label: "Home",
    svg: <ProfileHomeIcon />,
  },
  {
    url: "/",
    label: "Billing",
    svg: <ProfileBillingIcon />,
  },
  {
    url: "/",
    label: "Account",
    svg: <ProfileAccountIcon />,
  },
  {
    url: "/",
    label: "Logout",
    svg: <ProfileLogoutIcon />,
  },
];

export const STATUS_OPTIONS = [
  {
    label: "Status",
    svg: <StatusIcon />,
    url: "https://status.clepher.com/",
  },
  {
    label: "Community",
    svg: <CommunityIcon />,
    url: "https://www.facebook.com/groups/clepher/",
  },
  {
    label: "Knowledge Base",
    svg: <KnowledgeBaseIcon />,
    url: "https://clepher.com/support/",
  },
];

export const POST_ENGAGEMENT_BREADCRUMBS = [
  {
    label: "Capture Tools",
    url: "/capture-tools",
  },
  {
    label: "Capture Tools",
    url: "/capture-tools/post-engagement",
  },
  {
    label: "Edit",
  },
];
