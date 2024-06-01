import AppLogo from "./app-logo";
import ShieldOption from "./shield-option";
import ThemeToggler from "./theme-toggler";
import StatusOptions from "./status-options";
import ProfileDropdown from "./profile-dropdown";

const Header = () => {
  return (
    <div className="navbar fixed z-20 border-b border-b-base-300 bg-base-100 flex items-center justify-between">
      <div className="header-left flex items-center">
        <AppLogo />

        <div className="group px-2 py-[5px] border border-solid border-[#e3e9f4] rounded-md ml-3 cursor-pointer">
          <span className="group-hover:underline">@hitunezofficial</span>
        </div>
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