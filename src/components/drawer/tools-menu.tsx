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
                <a href="/929/capture-tools/links-library">
                  {el.svg}{" "}
                  {el.label}
                </a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default ToolsMenu;