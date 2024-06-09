import { STATUS_OPTIONS } from "../../enums/index";
import { ReactComponent as HeaderStatusIcon } from "../../assets/svgs/header-status.svg"

const StatusOptions = () => {
  return (
    <div role="listbox" className="dropdown hidden md:inline-block dropdown-end">
      <label tabIndex={0}>
        <button className="btn btn-circle btn-ghost">
          <HeaderStatusIcon />
        </button>
      </label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box mt-3 w-52" role="menu">
        {
          STATUS_OPTIONS.map(el => {
            return (
              <li role="menuitem" key={el.url}>
                <a href={el.url} target="_blank" rel="noreferrer">
                  <el.svg />{" "}{el.label}
                </a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default StatusOptions;