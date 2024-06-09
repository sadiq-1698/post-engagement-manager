import { ReactComponent as StackIcon } from "assets/svgs/stack.svg";
import { ReactComponent as GraphIcon } from "assets/svgs/graph.svg";
import { ReactComponent as MagnetIcon } from "assets/svgs/magnet.svg";
import { ReactComponent as MessageIcon } from "assets/svgs/message.svg";
import { ReactComponent as AudienceIcon } from "assets/svgs/audience.svg";
import { ReactComponent as SettingsIcon } from "assets/svgs/settings.svg";
import { ReactComponent as DashboardIcon } from "assets/svgs/dashboard.svg";
import { ReactComponent as BroadcastIcon } from "assets/svgs/broadcasts.svg";
import { ReactComponent as AutomationIcon } from "assets/svgs/automation.svg";

import { ReactComponent as LinksLibraryIcon } from "assets/svgs/links-library.svg";
import { ReactComponent as JsonGeneratorIcon } from "assets/svgs/json-generator.svg";
import { ReactComponent as MessengerCodeIcon } from "assets/svgs/messenger-code.svg";
import { ReactComponent as CheckboxPluginIcon } from "assets/svgs/checkbox-plugin.svg";
import { ReactComponent as PostEngagementIcon } from "assets/svgs/post-engagement.svg";
import { ReactComponent as SendToMessengerIcon } from "assets/svgs/send-to-messenger.svg";

import { ReactComponent as ProfileHomeIcon } from "assets/svgs/profile-home.svg";
import { ReactComponent as ProfileLogoutIcon } from "assets/svgs/profile-logout.svg";
import { ReactComponent as ProfileBillingIcon } from "assets/svgs/profile-billing.svg";
import { ReactComponent as ProfileAccountIcon } from "assets/svgs/profile-account.svg";

import { ReactComponent as StatusIcon } from "assets/svgs/status.svg";
import { ReactComponent as CommunityIcon } from "assets/svgs/community.svg";
import { ReactComponent as KnowledgeBaseIcon } from "assets/svgs/knowledge-base.svg";

import InstagramIcon from "assets/svgs/instagram.svg";
import MessengerBlurpleIcon from "assets/svgs/message-blurple.svg";

import { TableHeaders } from "components/post-engagement";
import TableRowAction from "components/post-engagement/table-row-action";

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

export const INSTAGRAM = "instagram";
export const MESSENGER = "messenger";

export const MOCK_TABLE_DATA = [
  {
    id: "1a2b",
    name: "Quality",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: MESSENGER,
  },
  {
    id: "2b3c",
    name: "Branding",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: INSTAGRAM,
  },
  {
    id: "3c4d",
    name: "Data",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: MESSENGER,
  },
  {
    id: "4d5e",
    name: "Mobility",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: MESSENGER,
  },
  {
    id: "5e6f",
    name: "Quality",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: INSTAGRAM,
  },
  {
    id: "6f7g",
    name: "Applications",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: MESSENGER,
  },
  {
    id: "7g8h",
    name: "Interactions",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: INSTAGRAM,
  },
  {
    id: "8h9i",
    name: "Branding",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: INSTAGRAM,
  },
  {
    id: "9i0j",
    name: "Paradigm",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: MESSENGER,
  },
  {
    id: "0j1k",
    name: "Markets",
    engaged: "50 / 25",
    acquired: 66,
    conversion: "10%",
    platform: INSTAGRAM,
  },
  {
    id: "1k2l",
    name: "Innovation",
    engaged: "60 / 30",
    acquired: 70,
    conversion: "15%",
    platform: MESSENGER,
  },
  {
    id: "2l3m",
    name: "Strategy",
    engaged: "45 / 20",
    acquired: 55,
    conversion: "12%",
    platform: INSTAGRAM,
  },
  {
    id: "3m4n",
    name: "Optimization",
    engaged: "70 / 35",
    acquired: 80,
    conversion: "18%",
    platform: MESSENGER,
  },
  {
    id: "4n5o",
    name: "Development",
    engaged: "65 / 30",
    acquired: 75,
    conversion: "14%",
    platform: MESSENGER,
  },
  {
    id: "5o6p",
    name: "Analysis",
    engaged: "55 / 25",
    acquired: 60,
    conversion: "11%",
    platform: INSTAGRAM,
  },
  {
    id: "6p7q",
    name: "Research",
    engaged: "40 / 20",
    acquired: 50,
    conversion: "10%",
    platform: MESSENGER,
  },
  {
    id: "7q8r",
    name: "Growth",
    engaged: "80 / 40",
    acquired: 90,
    conversion: "20%",
    platform: INSTAGRAM,
  },
  {
    id: "8r9s",
    name: "Scalability",
    engaged: "30 / 15",
    acquired: 40,
    conversion: "8%",
    platform: MESSENGER,
  },
  {
    id: "9s0t",
    name: "Automation",
    engaged: "50 / 25",
    acquired: 60,
    conversion: "10%",
    platform: INSTAGRAM,
  },
  {
    id: "0t1u",
    name: "Efficiency",
    engaged: "45 / 22",
    acquired: 55,
    conversion: "12%",
    platform: MESSENGER,
  },
  {
    id: "1u2v",
    name: "Customer",
    engaged: "70 / 35",
    acquired: 80,
    conversion: "18%",
    platform: INSTAGRAM,
  },
  {
    id: "2v3w",
    name: "Revenue",
    engaged: "55 / 27",
    acquired: 65,
    conversion: "15%",
    platform: MESSENGER,
  },
  {
    id: "3w4x",
    name: "Leads",
    engaged: "60 / 30",
    acquired: 70,
    conversion: "16%",
    platform: INSTAGRAM,
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
    svg: StatusIcon,
    url: "https://status.clepher.com/",
  },
  {
    label: "Community",
    svg: CommunityIcon,
    url: "https://www.facebook.com/groups/clepher/",
  },
  {
    label: "Knowledge Base",
    svg: KnowledgeBaseIcon,
    url: "https://clepher.com/support/",
  },
];

export const POST_ENGAGEMENT_BREADCRUMBS = [
  {
    label: "Capture Tools",
    url: "/capture-tools",
  },
  {
    label: "Post Engagement",
    url: "/capture-tools/post-engagement",
  },
  {
    label: "Edit",
  },
];

export const STATIC_COMMENTS_HARD_LIMIT: number = 10;

export const MESSAGE_TYPES = [
  {
    value: "flow",
    label: "Flow",
  },
  {
    value: "single-message",
    label: "Single Message",
  },
];

export const MESSAGE_FLOWS = [
  {
    value: "welcome-message",
    label: "Welcome Message",
  },
  {
    value: "default-reply",
    label: "Default Reply",
  },
];

export const TEXT_CARDS = [
  {
    value: "text-card-1",
    label: "Text Card #1",
  },
  {
    value: "text-card-2",
    label: "Text Card #2",
  },
];

export const COMMENT_TYPES = [
  {
    value: "static",
    label: "Static",
  },
  {
    value: "openai",
    label: "Open AI",
  },
];

export const INTEGRATION_TYPES = [
  {
    value: "integration-1",
    label: "Integration 1",
  },
  {
    value: "integration-2",
    label: "Integration 2",
  },
];

export const ASSISTANCE_TYPES = [
  {
    value: "assistance-1",
    label: "Assistance 1",
  },
  {
    value: "assistance-2",
    label: "Assistance 2",
  },
];

export const POST_ENGAGEMENT_HEADERS: TableHeaders = [
  {
    key: "platform",
    label: "",
    className: "w-5",
    render: (value) => (
      <img
        className="w-3.5 h-3.5"
        alt={value === MESSENGER ? "messenger-blurple" : "insta-og"}
        src={value === MESSENGER ? MessengerBlurpleIcon : InstagramIcon}
      />
    ),
  },
  {
    key: "name",
    label: "Name",
    sortable: true,
    className: "w-[150px]",
  },
  {
    key: "engaged",
    label: "Engaged / Unique",
    className: "w-[150px]",
  },
  {
    key: "acquired",
    label: "Acquired",
    className: "w-[150px]",
  },
  {
    key: "conversion",
    label: "Conversion",
    className: "w-[150px]",
  },
  {
    key: "id",
    label: "Action",
    className: "w-5",
    render: (value, index, data) => (
      <TableRowAction data={data} tableRow={index as number} value={value} />
    ),
  },
];
