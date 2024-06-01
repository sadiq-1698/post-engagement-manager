import { PROFILE_DROPDOWN_OPTIONS } from "../../enums";

const ProfileDropdown = () => {
  return (
    <div role="listbox" className="dropdown dropdown-end">
      <label tabIndex={0}>
        <button className="btn avatar btn-circle btn-ghost">
          <div className="w-10 rounded-full">
            <img
              alt="Profile"
              loading="lazy"
              src="https://avatars.githubusercontent.com/u/21959017?s=400&amp;u=1c2711bcd2713d682bf553835a6dce998c6fd49b&amp;v=4"
            />
          </div>
        </button>
      </label>

      <ul
        role="menu"
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box mt-3 w-48"
      >
        {
          PROFILE_DROPDOWN_OPTIONS.map(el => {
            return (
              <li role="menuitem">
                <a href={el.url}>
                  {el.svg}{" "}{el.label}
                </a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default ProfileDropdown;