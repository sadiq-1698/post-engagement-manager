import { Link } from "react-router-dom";
import { TableRowDataType } from "components/common/clepher-table";

type TableRowActionProps = {
  value: any
  tableRow: number,
  data: Array<TableRowDataType>,
}

const TableRowAction = ({ data, tableRow, value }: TableRowActionProps) => {
  const isFromLastRows = tableRow === data.length - 1 || tableRow === data.length - 2;
  const dropDownOverflowClass = isFromLastRows ? 'dropdown-top' : 'dropdown-bottom';

  return (
    <div role="listbox" className={`dropdown ${dropDownOverflowClass} dropdown-end`}>
      <label tabIndex={1}>
        <button className="btn btn-xs btn-outline">Actions</button>
      </label>
      <ul
        tabIndex={1}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box menu-xs z-[1]"
        role="menu"
      >
        <li role="menuitem">
          <Link to={value + "/edit"}>
            Edit
          </Link>
        </li>
        <li role="menuitem">
          <Link to="/">
            Rename
          </Link>
        </li>
        <li role="menuitem">
          <Link to="/">
            Delete
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TableRowAction;