import { TableSortOrder } from "components/post-engagement";

const SortArrow = ({ sortOrder, className = "" }: { sortOrder: TableSortOrder, className?: string }) => {
  const sortIconClass = sortOrder === 'reset' ? 'opacity-0' : sortOrder === 'desc' ? '' : 'rotate-180';
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={`inline-block h-4 w-4 ${sortIconClass} ${className}`} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="m11.998 17 7-8h-14z">
      </path>
    </svg>
  );
}

export default SortArrow;