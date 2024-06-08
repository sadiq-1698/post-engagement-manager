import React from 'react';
import { TableSortOrder } from '.';
import { Link } from 'react-router-dom';
import { MESSENGER } from '../../enums';
import SortArrow from '../common/sort-arrow';
import InstagramIcon from "../../assets/svgs/instagram.svg";
import MessengerBlurpleIcon from "../../assets/svgs/message-blurple.svg";

type PostEngagementsTableProps = {
  sortingOrder: TableSortOrder,
  selectedRows: Array<number>,
  handleSelectAll: () => void,
  handleSelectRow: (index: number) => void,
  handleHeaderClick: (key: string) => void,
  selectAllRef: React.RefObject<HTMLInputElement>,
  currentData: Array<Record<string, string | number>>,
}

const PostEngagementsTable = ({
  currentData,
  selectAllRef,
  selectedRows,
  sortingOrder,
  handleSelectAll,
  handleSelectRow,
  handleHeaderClick
}: PostEngagementsTableProps) => {
  return (
    <div className="overflow-y-hidden overflow-x-scroll">
      <table className="table table-sm bg-base-100 px-6" style={{ position: 'initial' }}>
        <thead>
          <tr>
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
            <th colSpan={1} className='w-5'>
              <div className="px-1"></div>
            </th>
            <th colSpan={1} className='w-[150px]'>
              <div className="cursor-pointer select-none" onClick={() => handleHeaderClick('name')}>
                Name
                <SortArrow sortOrder={sortingOrder} />
              </div>
            </th>
            <th colSpan={1} className='w-[150px]'>
              <div className="px-1">Engaged / Unique</div>
            </th>
            <th colSpan={1} className='w-[150px]'>
              <div className="px-1">Acquired</div>
            </th>
            <th colSpan={1} className='w-[150px]'>
              <div className="px-1">Conversion</div>
            </th>
            <th colSpan={1} className='w-5'>
              <div className="px-1">Action</div>
            </th>
          </tr>
        </thead>

        <tbody>
          {
            currentData.map((el, idx: number) => {
              const isFromLastRows = idx === currentData.length - 1 || idx === currentData.length - 2;
              const dropDownOverflowClass = isFromLastRows ? 'dropdown-top' : 'dropdown-bottom';

              return (
                <tr key={el.name + "-" + idx}>
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
                  <td className='w-5'>
                    <img
                      className='w-3.5 h-3.5'
                      alt={el.platform === MESSENGER ? "messenger-blurple" : "insta-og"}
                      src={el.platform === MESSENGER ? MessengerBlurpleIcon : InstagramIcon}
                    />
                  </td>
                  <td className='w-[150px]'>{el.name}</td>
                  <td className='w-[150px]'>{el.engaged}</td>
                  <td className='w-[150px]'>{el.acquired}</td>
                  <td className='w-[150px]'>{el.conversion}</td>
                  <td className='w-5'>
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
                          <Link to={el.id + "/edit"}>
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
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default PostEngagementsTable;