import { MOCK_TABLE_DATA } from "../../enums";
import { useEffect, useRef, useState } from "react";
import PostEngagementsTable from "./post-engagement-table";
import TableActions from "./table-actions";
import Pagination from "./pagination";

const PostEngagement = () => {
  const [data, setData] = useState(MOCK_TABLE_DATA);

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
    const newData = data.filter((_, idx) => !selectedRows.includes(idx));
    setData([...newData]);
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

  const filteredData = data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
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
          handleSelectAll={handleSelectAll}
          handleSelectRow={handleSelectRow}
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