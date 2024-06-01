import React from "react";

const PaginationButton = ({ children, disabled = false }: { children: React.ReactNode, disabled?: boolean }) => {
  return (
    <button className="btn btn-circle btn-primary btn-sm" disabled={disabled}>
      {children}
    </button>
  );
};

export default PaginationButton;
