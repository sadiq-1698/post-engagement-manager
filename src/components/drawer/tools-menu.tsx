import { CAPTURE_TOOLS_OPTION } from "../../enums";
import { Link, useLocation } from "react-router-dom";

const ToolsMenu = () => {
  const { pathname } = useLocation();

  return (
    <div className="col-span-2 hidden px-6 lg:block">
      <ul role="menu" className="menu rounded-box bg-base-100 menu-vertical">
        <li role="menuitem" className="menu-title">
          <span>Capture Tools</span>
        </li>

        {
          CAPTURE_TOOLS_OPTION.map(el => {
            const isActive = el.url === pathname.split("/")[2];
            return (
              <li role="menuitem" key={el.url}>
                <Link to={el.url} className={`${isActive ? 'active' : ''}`}>
                  {el.svg}{" "}
                  {el.label}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default ToolsMenu;