import { ReactComponent as ProfileHomeIcon } from "assets/svgs/profile-home.svg";
import { ReactComponent as ProfileLogoutIcon } from "assets/svgs/profile-logout.svg";
import { ReactComponent as ProfileBillingIcon } from "assets/svgs/profile-billing.svg";
import { ReactComponent as ProfileAccountIcon } from "assets/svgs/profile-account.svg";

import { ReactComponent as StatusIcon } from "assets/svgs/status.svg";
import { ReactComponent as CommunityIcon } from "assets/svgs/community.svg";
import { ReactComponent as KnowledgeBaseIcon } from "assets/svgs/knowledge-base.svg";

const PROFILE_DROPDOWN_OPTIONS = [
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

const STATUS_OPTIONS = [
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

export { PROFILE_DROPDOWN_OPTIONS, STATUS_OPTIONS };