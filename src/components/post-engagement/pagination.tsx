import PaginationButton from "./pagination-btn";
import { ReactComponent as PaginationPrevIcon } from "../../assets/svgs/pagination-prev.svg";
import { ReactComponent as PaginationNextIcon } from "../../assets/svgs/pagination-next.svg";
import { ReactComponent as PaginationFinalIcon } from "../../assets/svgs/pagination-final.svg";
import { ReactComponent as PaginationInitialIcon } from "../../assets/svgs/pagination-initial.svg";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-4 py-3.5">
      <PaginationButton>
        <PaginationInitialIcon />
      </PaginationButton>

      <PaginationButton>
        <PaginationPrevIcon />
      </PaginationButton>

      <PaginationButton>
        <PaginationNextIcon />
      </PaginationButton>

      <PaginationButton>
        <PaginationFinalIcon />
      </PaginationButton>

      <span className="flex items-center gap-1">
        <div>Page</div>
        <strong>1 of 2</strong>
      </span>

      <span className="hidden items-center gap-1 md:flex">
        · Go to page:
        <input
          type="number"
          className="input w-16 p-1 input-sm input-bordered focus:outline-offset-0"
        />
      </span>
    </div>
  );
}

export default Pagination;