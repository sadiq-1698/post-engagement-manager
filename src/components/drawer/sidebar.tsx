import { Link } from "react-router-dom";
import { SIDEBAR_MENU } from "../../enums";

const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label className="drawer-overlay"></label>

      <ul className="menu border-r border-r-base-300 min-h-full bg-base-100 pt-20">
        {
          SIDEBAR_MENU.map(el => {
            return (
              <li>
                {/* add class 'active' for selected styles */}
                <Link className="py-4" to={el.url}>
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