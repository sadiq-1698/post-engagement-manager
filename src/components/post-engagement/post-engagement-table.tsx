import { Link } from 'react-router-dom';
import { MOCK_TABLE_DATA } from '../../enums';
import React, { useEffect, useRef, useState } from 'react';
import InstagramIcon from "../../assets/svgs/instagram.svg";
import MessengerBlurpleIcon from "../../assets/svgs/message-blurple.svg";
import Pagination from './pagination';
import TableActions from './table-actions';

const PostEngagementsTable = () => {
  // search query states
  const [searchQuery, setSearchQuery] = useState("");

  // row selection states and constants
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const selectAllRef = useRef<HTMLInputElement>(null);

  // pagination states and constants
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(MOCK_TABLE_DATA.length / rowsPerPage);

  useEffect(() => {
    if (selectAllRef.current) {
      if (selectedRows.length === 0) {
        selectAllRef.current.indeterminate = false;
        selectAllRef.current.checked = false;
      } else if (selectedRows.length === MOCK_TABLE_DATA.length) {
        selectAllRef.current.indeterminate = false;
        selectAllRef.current.checked = true;
      } else {
        selectAllRef.current.indeterminate = true;
      }
    }
  }, [selectedRows]);

  const handleSelectAll = () => {
    if (selectedRows.length === MOCK_TABLE_DATA.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(MOCK_TABLE_DATA.map((_, idx) => idx));
    }
  };

  const handleSelectRow = (index: number) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter(i => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleBulkDelete = () => {
    const newData = MOCK_TABLE_DATA.filter((_, idx) => !selectedRows.includes(idx));
    setSelectedRows([]);
    setCurrentPage(1); // Reset to first page after delete
  };

  const filteredData = MOCK_TABLE_DATA.filter(el => el.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const startRow = (currentPage - 1) * rowsPerPage;
  const currentData = filteredData.slice(startRow, startRow + rowsPerPage);

  return (
    <>
      <TableActions
        searchQuery={searchQuery}
        onBulkDelete={handleBulkDelete}
        onSearchChange={handleSearchChange}
      />

      <div className="overflow-y-hidden overflow-x-scroll">
        <table className="table table-sm bg-base-100 px-6">
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
                <div className="cursor-pointer select-none">Name</div>
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
              currentData.map((el, idx) => {
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
                        className="h-3.5 w-3.5"
                        alt={el.platform === "messenger" ? "messenger-blurple" : "insta-og"}
                        src={el.platform === "messenger" ? InstagramIcon : MessengerBlurpleIcon}
                      />
                    </td>
                    <td className='w-[150px]'>{el.name}</td>
                    <td className='w-[150px]'>{el.engaged}</td>
                    <td className='w-[150px]'>{el.acquired}</td>
                    <td className='w-[150px]'>{el.conversion}</td>
                    <td className='w-[150px]'>
                      <div role="listbox" className="dropdown dropdown-bottom dropdown-end">
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

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>

  );
};

export default PostEngagementsTable;