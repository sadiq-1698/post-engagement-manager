import { ReactComponent as SearchIcon } from "assets/svgs/search.svg";
import { ReactComponent as CaretDownIcon } from "assets/svgs/caret-down.svg";

type TableActionsProps = {
  searchQuery: string,
  onSearchChange: (query: string) => void,
  bulkActions: { label: string, action: () => void }[]
}

/**
 * Props for the TableActions component.
 * @typedef {Object} TableActionsProps
 * @property {string} searchQuery - The current search query.
 * @property {(query: string) => void} onSearchChange - Function to handle search query changes.
 * @property {{ label: string, action: () => void }[]} bulkActions - Array of bulk actions with labels and corresponding action functions.
 */

/**
 * Component for rendering table actions.
 * @param {TableActionsProps} props - The props for the component.
 * @returns {JSX.Element} - JSX element representing the table actions.
 */
const TableActions = ({ searchQuery, onSearchChange, bulkActions }: TableActionsProps) => {
  return (
    <div className="mb-2 flex flex-row items-end gap-2">
      <div className="grow truncate">
        <h4 className="truncate text-xl">Post Engagements</h4>
      </div>
      <div className="form-control hidden md:flex">
        <div className="join items-center border border-neutral bg-base-100">
          <input
            type="text"
            value={searchQuery}
            placeholder="Search…"
            onChange={(e) => onSearchChange(e.target.value)}
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
          role="menu"
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box menu-sm z-[1] mt-1 w-48"
        >
          <li role="menuitem">
            {
              bulkActions.map((el, idx) => {
                return (
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      el.action();
                    }}
                    key={el.label +"|=|" + idx}
                  >
                    {el.label}
                  </a>
                );
              })
            }
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TableActions;