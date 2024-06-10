export type ClepherBadgeProps = {
  label: string | React.ReactNode,
  onClose: () => void
}

const ClepherBadge = ({ label, onClose }: ClepherBadgeProps) => {
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