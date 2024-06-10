import AppLogo from "components/header/logo";
import HeaderClientLink from "components/header/link";
import ShieldOption from "components/header/shield-option";
import ThemeToggler from "components/header/theme-toggler";
import StatusOptions from "components/header/status-options";
import ProfileDropdown from "components/header/profile-dropdown";

const Header = () => {
  return (
    <div className="navbar fixed z-20 border-b border-b-base-300 bg-base-100 flex items-center justify-between max-w-[100vw]">
      <div className="header-left flex items-center">
        <AppLogo />
        <HeaderClientLink />
      </div>

      <div className="header-right">
        <div className="flex items-center">
          <ShieldOption />
          <ThemeToggler />
          <StatusOptions />
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
}

export default Header;