const ClepherBadge = ({ label, onClose }: { label: string, onClose: () => void }) => {
  return (
    <div className="badge-clepher">
      {label}
      <span
        onClick={onClose}
        className="ml-1 cursor-pointer text-xs hover:text-error">
        ✕
      </span>
    </div>
  );
}

export default ClepherBadge;