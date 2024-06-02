import { Link } from "react-router-dom";
import { CAPTURE_TOOLS_OPTION } from "../../enums";

const ToolsMenu = () => {
  return (
    <div className="col-span-2 hidden px-6 lg:block">
      <ul role="menu" className="menu rounded-box bg-base-100 menu-vertical">
        <li role="menuitem" className="menu-title">
          <span>Capture Tools</span>
        </li>

        {
          CAPTURE_TOOLS_OPTION.map(el => {
            return (
              <li role="menuitem" className="">
                {/* add class 'active' for selected styles */}
                <Link to={el.url}>
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