import React from "react";

const PaginationButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="rounded-full text-white font-bold w-8 h-8 flex items-center justify-center bg-[#0069ff] hover:bg-[#005ae5]">
      {children}
    </button>
  );
};

export default PaginationButton;
