import { useState } from "react";
import PaginationButton from "./pagination-btn";
import { ReactComponent as PaginationPrevIcon } from "../../assets/svgs/pagination-prev.svg";
import { ReactComponent as PaginationNextIcon } from "../../assets/svgs/pagination-next.svg";
import { ReactComponent as PaginationFinalIcon } from "../../assets/svgs/pagination-final.svg";
import { ReactComponent as PaginationInitialIcon } from "../../assets/svgs/pagination-initial.svg";

type PaginationProps = {
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const [inputValue, setInputValue] = useState(currentPage);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 0 && value <= totalPages) {
      setInputValue(value);
      onPageChange(value);
    } else {
      setInputValue(currentPage);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 py-3.5">
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        <PaginationInitialIcon />
      </PaginationButton>

      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
      >
        <PaginationPrevIcon />
      </PaginationButton>

      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
      >
        <PaginationNextIcon />
      </PaginationButton>

      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        <PaginationFinalIcon />
      </PaginationButton>

      <span className="flex items-center gap-1">
        <div>Page</div>
        <strong>{currentPage} of {totalPages}</strong>
      </span>

      <span className="hidden items-center gap-1 md:flex">
        · Go to page:
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          className="input w-16 p-1 input-sm input-bordered focus:outline-offset-0"
        />
      </span>
    </div>
  );
}

export default Pagination;