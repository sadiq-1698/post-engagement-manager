import Pagination from "./pagination";
import TableActions from "./table-actions";
import { MOCK_TABLE_DATA } from "../../enums";
import { useEffect, useRef, useState } from "react";
import PostEngagementsTable from "./post-engagement-table";

export type TableSortOrder = 'asc' | 'desc' | 'reset'

const PostEngagement = () => {
  const [sortingOrder, setSortingOrder] = useState<TableSortOrder>('reset');
  const [sortedData, setSortedData] = useState(MOCK_TABLE_DATA);

  const [searchQuery, setSearchQuery] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const selectAllRef = useRef<HTMLInputElement>(null);


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleBulkDelete = () => {
    const newData = sortedData.filter((_, idx) => !selectedRows.includes(idx));
    setSortedData([...newData]);
    setSelectedRows([]);
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

  const handleHeaderClick = (key: string) => {
    let newOrder: TableSortOrder = 'reset';
    let sortedArray = [...sortedData];

    if (sortingOrder === 'reset') {
      newOrder = 'asc';
      sortedArray.sort((a, b) => (a[key as keyof typeof a] as string).localeCompare(b[key as keyof typeof b] as string));
    } else if (sortingOrder === 'asc') {
      newOrder = 'desc';
      sortedArray.sort((a, b) => (b[key as keyof typeof b] as string).localeCompare(a[key as keyof typeof a] as string));
    } else {
      newOrder = 'reset';
      sortedArray = MOCK_TABLE_DATA;
    }

    setSortingOrder(newOrder);
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
          onBulkDelete={handleBulkDelete}
          onSearchChange={handleSearchChange}
        />

        <PostEngagementsTable
          currentData={currentData}
          selectedRows={selectedRows}
          selectAllRef={selectAllRef}
          sortingOrder={sortingOrder}
          handleSelectAll={handleSelectAll}
          handleSelectRow={handleSelectRow}
          handleHeaderClick={handleHeaderClick}
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