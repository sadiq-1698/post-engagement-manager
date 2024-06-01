import HeaderActionButton from "./header/action-btn";
import ProfileDropdown from "./header/profile-dropdown";
import ShieldOption from "./header/shield-option";
import ThemeToggler from "./header/theme-toggler";

const Header = () => {
  return (
    <div className="navbar fixed z-20 border-b border-b-base-300 bg-base-100 flex items-center justify-between">
      <div className="header-left flex items-center">
        <div className="lg:px-2">
          <a className="hidden lg:block" href="/home">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://graph.facebook.com/237352949662793/picture?type=normal"
                  alt="Page Name"
                />
              </div>
            </div>
          </a>
          <label className="btn btn-circle btn-ghost lg:hidden">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="h-5 w-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
            </svg>
          </label>
        </div>

        <div className="group px-2 py-[5px] border border-solid border-[#e3e9f4] rounded-md ml-3 cursor-pointer">
          <span className="group-hover:underline">@hitunezofficial</span>
        </div>
      </div>

      <div className="header-right">
        <div className="flex items-center">

          <ShieldOption />

          <ThemeToggler />

          <div role="listbox" className="dropdown hidden md:inline-block dropdown-end">
            <label tabIndex={0}>
              <button className="btn btn-circle btn-ghost">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                </svg>
              </button>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box mt-3 w-52" role="menu">
              <li role="menuitem">
                <a href="https://status.clepher.com/" target="_blank" rel="noreferrer">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeWidth="2" d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M7,12 L11,15 L16,8"></path>
                  </svg> Status
                </a>
              </li>
              <li role="menuitem">
                <a href="https://www.facebook.com/groups/clepher/" target="_blank" rel="noreferrer">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"></path><path d="M13 7l0 .01"></path><path d="M17 7l0 .01"></path><path d="M17 11l0 .01"></path><path d="M17 15l0 .01"></path>
                  </svg>
                  Community</a>
              </li>
              <li role="menuitem"><a href="https://clepher.com/support/" target="_blank" rel="noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M426.2 80.4l-170.2 32-170.2-32C64 77 48 97.3 48 118v244.5c0 20.7 16 32.6 37.8 37.6L256 432l170.2-32c21.8-5 37.8-16.9 37.8-37.6V118c0-20.7-16-41-37.8-37.6zm0 282l-151.2 32V149.9l151.2-32v244.5zm-189.2 32l-151.2-32V118L237 150v244.4z"></path></svg>
                Knowledge Base</a>
              </li>
            </ul>
          </div>

          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
}

export default Header;