import { ToolsOption } from "types/global";
import { Link, useLocation } from "react-router-dom";

export type ToolsMenuProps = { title?: string, options: ToolsOption }

/**
 * This component renders a menu with optional icons and links. 
 * It highlights the active link based on the current pathname.
 * 
 * @typedef {Object} ToolsMenuProps
 * @property {string} [title] - The title of the tools menu.
 * @property {ToolsOption} options - The options available in the tools menu.
 * 
 * @param {ToolsMenuProps} props - The props for the ToolsMenu component.
 * @returns {JSX.Element} The rendered tools menu component.
 */
const ToolsMenu = ({ title, options }: ToolsMenuProps) => {
  const { pathname } = useLocation();

  return (
    <div className="col-span-2 hidden px-6 lg:block">
      <ul role="menu" className="menu rounded-box bg-base-100 menu-vertical">
        {
          title &&
          <li role="menuitem" className="menu-title">
            <span>{title}</span>
          </li>
        }


        {
          options.map((el, idx) => {
            const isActive = el.url === pathname.split("/")[2];
            return (
              <li role="menuitem" key={el.url + "-|-" + idx}>
                <Link to={el.url} className={`${isActive ? 'active' : ''}`}>
                  {el.svg ? el.svg : null}{" "}
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