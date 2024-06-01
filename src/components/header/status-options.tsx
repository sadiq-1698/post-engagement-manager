import { STATUS_OPTIONS } from "../../enums";

const StatusOptions = () => {
  return (
    <div role="listbox" className="dropdown hidden md:inline-block dropdown-end">
      <label tabIndex={0}>
        <button className="btn btn-circle btn-ghost">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
          </svg>
        </button>
      </label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box mt-3 w-52" role="menu">
        {
          STATUS_OPTIONS.map(el => {
            return (
              <li role="menuitem">
                <a href={el.url} target="_blank" rel="noreferrer">
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

export default StatusOptions;