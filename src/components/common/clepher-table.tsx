import SortArrow from "components/common/sort-arrow";
import { TableHeaders, TableSortOrder } from "components/post-engagement";

export type TableRowDataType = {
  id: string,
  [key: string]: string | number
}

export type ClepherTableProps = {
  selectable?: boolean
  headers: TableHeaders,
  selectedRows: number[],
  sortOrder?: TableSortOrder,
  handleSelectAll: () => void,
  data: Array<TableRowDataType>,
  handleSort: (key: string) => void,
  handleSelectRow: (index: number) => void,
  selectAllRef: React.RefObject<HTMLInputElement>,
}

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