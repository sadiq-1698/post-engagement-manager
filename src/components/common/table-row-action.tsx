import { useNavigate } from "react-router-dom";
import { TableRowActionType, TableRowDataType } from "types/global";

type TableRowActionProps = {
  value: any,
  tableRow: number,
  actions: TableRowActionType[],
  data: Array<TableRowDataType>,
}

/**
 * Props for the TableRowAction component.
 * 
 * @typedef {Object} TableRowActionProps
 * @property {any} value - The value associated with the row action.
 * @property {number} tableRow - The index of the table row.
 * @property {TableRowActionType[]} actions - The list of actions available for the row.
 * @property {TableRowDataType[]} data - The table data.
 * 
 * @param {TableRowActionProps} props - The props for the TableRowAction component.
 * @returns {JSX.Element} The rendered table row action component.
 */
const TableRowAction = ({ data, tableRow, value, actions }: TableRowActionProps) => {
  const navigate = useNavigate();
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
        {
          actions.map((el: TableRowActionType, index: number) => (
            <li key={index} role="menuitem">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  el.action({ navigate, value })
                }}
              >
                {el.label}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default TableRowAction;