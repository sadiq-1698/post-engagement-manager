import { TableHeaders } from "types/global";
import SortArrow from "components/common/sort-arrow";
import { TableRowDataType, TableSortOrder } from "types/global";

export type ClepherTableProps = {
  selectable?: boolean,
  headers: TableHeaders,
  selectedRows: number[],
  sortOrder?: TableSortOrder,
  handleSelectAll: () => void,
  data: Array<TableRowDataType>,
  handleSort: (key: string) => void,
  handleSelectRow: (index: number) => void,
  selectAllRef: React.RefObject<HTMLInputElement>,
}

/**
 * This component renders a table with selectable rows, sortable headers, and customizable data.
 * 
 * @param {object} props - The properties object.
 * @param {boolean} [props.selectable=true] - Determines if rows are selectable. Defaults to true.
 * @param {TableHeaders} props.headers - The headers of the table, including their labels, keys, and other properties.
 * @param {number[]} props.selectedRows - An array of indices of the selected rows.
 * @param {TableSortOrder} [props.sortOrder='reset'] - The order in which the table is sorted. Defaults to 'reset'.
 * @param {function} props.handleSelectAll - The function to be called when the "select all" checkbox is clicked.
 * @param {Array<TableRowDataType>} props.data - The data to be displayed in the table.
 * @param {function} props.handleSort - The function to be called when a sortable header is clicked.
 * @param {function} props.handleSelectRow - The function to be called when a row is selected.
 * @param {React.RefObject<HTMLInputElement>} props.selectAllRef - A reference to the "select all" checkbox.
 * 
 * @typedef {object} ClepherTableProps - The type for ClepherTable component properties.
 * @property {boolean} [selectable=true] - Determines if rows are selectable. Defaults to true.
 * @property {TableHeaders} headers - The headers of the table, including their labels, keys, and other properties.
 * @property {number[]} selectedRows - An array of indices of the selected rows.
 * @property {TableSortOrder} [sortOrder='reset'] - The order in which the table is sorted. Defaults to 'reset'.
 * @property {function} handleSelectAll - The function to be called when the "select all" checkbox is clicked.
 * @property {Array<TableRowDataType>} data - The data to be displayed in the table.
 * @property {function} handleSort - The function to be called when a sortable header is clicked.
 * @property {function} handleSelectRow - The function to be called when a row is selected.
 * @property {React.RefObject<HTMLInputElement>} selectAllRef - A reference to the "select all" checkbox.
 * 
 * @typedef {object} TableHeaders - The type for table headers.
 * @property {string} key - The key of the header.
 * @property {string} label - The label of the header.
 * @property {boolean} [sortable] - Whether the column is sortable. Defaults to false.
 * @property {string} [className] - Additional classes for the header cell.
 * @property {function} [render] - A function to customize the rendering of the cell content.
 * 
 * @typedef {object} TableRowDataType - The type for table row data.
 * 
 * @typedef {'asc' | 'desc' | 'reset'} TableSortOrder - The type for table sort order.
 */
const ClepherTable = ({
  data,
  headers,
  handleSort,
  selectedRows,
  selectAllRef,
  handleSelectAll,
  handleSelectRow,
  selectable = true,
  sortOrder = 'reset',
}: ClepherTableProps) => {
  return (
    <div className="overflow-y-hidden overflow-x-scroll">
      <table className="table table-sm bg-base-100 px-6" style={{ position: 'initial' }}>
        <thead>
          <tr>
            {
              selectable &&
              <th colSpan={1} className='w-5'>
                <div className="px-1">
                  <input
                    type="checkbox"
                    ref={selectAllRef}
                    onClick={handleSelectAll}
                    className="checkbox checkbox-sm"
                  />
                </div>
              </th>
            }
            {
              headers.map((el, hIdx) => {
                return (
                  <th key={el.key + "|" + hIdx} colSpan={1} className={el.className}>
                    <div
                      onClick={() => el.sortable ? handleSort(el.key) : {}}
                      className={`px-1 ${el.sortable ? 'cursor-pointer select-none' : ''}`}
                    >
                      {el.label}
                      {
                        el.sortable &&
                        <SortArrow sortOrder={sortOrder} />
                      }
                    </div>
                  </th>
                );
              })
            }
          </tr>
        </thead>

        <tbody>
          {data.map((el: any, idx: number) => {
            return (
              <tr key={el.name + "-" + idx}>
                {
                  selectable &&
                  <td className='w-5'>
                    <div className="px-1">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        checked={selectedRows.includes(idx)}
                        onChange={() => handleSelectRow(idx)}
                      />
                    </div>
                  </td>
                }
                {headers.map((header, hIdx) => (
                  <td key={header.key + "-" + hIdx} className={header.className}>
                    {header.render ? header.render(el[header.key], idx, data) : el[header.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ClepherTable;