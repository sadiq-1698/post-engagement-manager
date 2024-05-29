const HeaderActionButton = ({ variant = "base", children }: { variant?: "warn" | "base", children: React.ReactNode }) => {
  const hoverBg = variant === "warn" ? "hover:bg-[#e58b8b]" : "hover:bg-[#d7dce1]";

  return (
    <div className={`w-12 h-12 flex justify-center items-center rounded-full ${hoverBg} transition-all duration-200 ease-in-out cursor-pointer header-action-btn`}>
      {children}
    </div>
  );
}

export default HeaderActionButton;