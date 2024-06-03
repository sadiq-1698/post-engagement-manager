import { ReactComponent as SearchIcon } from "../../assets/svgs/search.svg";
import { ReactComponent as CaretDownIcon } from "../../assets/svgs/caret-down.svg";

const TableActions = () => {
  return (
    <div className="mb-2 flex flex-row items-end gap-2">
      <div className="grow truncate">
        <h4 className="truncate text-xl">Post Engagements</h4>
      </div>
      <div className="form-control hidden md:flex">
        <div className="join items-center border border-neutral bg-base-100">
          <input
            type="text"
            placeholder="Search…"
            className="input input-sm h-[30px] focus:outline-none join-item border-0"
          />
          <span className="join-item px-1">
            <SearchIcon />
          </span>
        </div>
      </div>

      <div role="listbox" className="dropdown dropdown-end">
        <label tabIndex={0}>
          <button className="btn btn-sm btn-outline">
            Bulk Actions{" "}
            <CaretDownIcon />
          </button>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box menu-sm z-[1] mt-1 w-48"
          role="menu"
        >
          <li role="menuitem">
            <a href="/">
              Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TableActions;