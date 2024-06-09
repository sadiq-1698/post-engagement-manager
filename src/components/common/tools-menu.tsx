import { ToolsOption } from "types/global";
import { Link, useLocation } from "react-router-dom";

const ToolsMenu = ({ title, options }: { title?: string, options: ToolsOption }) => {
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