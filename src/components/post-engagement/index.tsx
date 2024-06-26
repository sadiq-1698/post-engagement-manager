import { TableSortOrder } from "types/global";
import Pagination from "components/common/pagination";
import React, { useEffect, useRef, useState } from "react";
import ClepherTable from "components/common/clepher-table";
import TableActions from "components/post-engagement/table-actions";
import { MOCK_TABLE_DATA, POST_ENGAGEMENT_HEADERS, ROWS_PER_PAGE } from "enums";

const PostEngagement = () => {
  const [sortOrder, setSortOrder] = useState<TableSortOrder>('reset');
  const [sortedData, setSortedData] = useState(MOCK_TABLE_DATA);

  const [searchQuery, setSearchQuery] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(ROWS_PER_PAGE);

  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const selectAllRef = useRef<HTMLInputElement>(null);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSelectRow = (index: number) => {
    setSelectedRows(prev => prev.includes(index) ? prev.filter(idx => idx !== index) : [...prev, index]);
  };

  const handleSelectAll = () => {
    if (selectAllRef.current?.checked) {
      const newSelectedRows = currentData.map((_, idx) => startRow + idx);
      setSelectedRows([...newSelectedRows]);
    } else {
      setSelectedRows([]);
    }
  };

  const handleBulkDelete = () => {
    const newData = sortedData.filter((_, idx) => !selectedRows.includes(idx));
    setSortedData([...newData]);
    setSelectedRows([]);
  };

  const handleSort = (key: string) => {
    let newOrder: TableSortOrder = 'reset';
    let sortedArray = [...sortedData];

    if (sortOrder === 'reset') {
      newOrder = 'asc';
      sortedArray.sort((a, b) => (a[key as keyof typeof a] as string).localeCompare(b[key as keyof typeof b] as string));
    } else if (sortOrder === 'asc') {
      newOrder = 'desc';
      sortedArray.sort((a, b) => (b[key as keyof typeof b] as string).localeCompare(a[key as keyof typeof a] as string));
    } else {
      newOrder = 'reset';
      sortedArray = MOCK_TABLE_DATA;
    }

    setSortOrder(newOrder);
    setSortedData([...sortedArray]);
  };

  const filteredData = sortedData.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startRow = (currentPage - 1) * rowsPerPage;
  const currentData = filteredData.slice(startRow, startRow + rowsPerPage);

  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = selectedRows.length > 0 && selectedRows.length < currentData.length;
      selectAllRef.current.checked = selectedRows.length === currentData.length;
    }
  }, [selectedRows, currentData.length]);

  return (
    <div className="lg:col-span-7">
      <div className="px-6">
        <TableActions
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          bulkActions={[{ label: 'Delete', action: handleBulkDelete }]}
        />

        <ClepherTable
          data={currentData}
          sortOrder={sortOrder}
          handleSort={handleSort}
          selectedRows={selectedRows}
          selectAllRef={selectAllRef}
          handleSelectAll={handleSelectAll}
          handleSelectRow={handleSelectRow}
          headers={POST_ENGAGEMENT_HEADERS}
        />

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default PostEngagement;