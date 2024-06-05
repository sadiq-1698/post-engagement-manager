import React from "react";

type PaginationButtonProps = {
  children: React.ReactNode,
  disabled?: boolean,
  onClick: () => void
}

const PaginationButton = ({ children, disabled = false, onClick }: PaginationButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="btn btn-circle btn-primary btn-sm"
    >
      {children}
    </button>
  );
};

export default PaginationButton;
