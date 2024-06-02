import { SIDEBAR_MENU } from "../../enums";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="drawer-side">
      <label className="drawer-overlay"></label>

      <ul className="menu border-r border-r-base-300 min-h-full bg-base-100 pt-20">
        {
          SIDEBAR_MENU.map(el => {
            const isActive = el.url === pathname.split("/")[1];
            return (
              <li key={el.url}>
                <Link className={`${isActive ? 'active ' : ''}py-4`} to={el.url}>
                  {el.component}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Sidebar;