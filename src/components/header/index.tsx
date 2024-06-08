import AppLogo from "./logo";
import HeaderClientLink from "./link";
import ShieldOption from "./shield-option";
import ThemeToggler from "./theme-toggler";
import StatusOptions from "./status-options";
import ProfileDropdown from "./profile-dropdown";

const Header = () => {
  return (
    <div className="navbar fixed z-20 border-b border-b-base-300 bg-base-100 flex items-center justify-between">
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