export type ClepherBadgeProps = {
  onClose: () => void,
  label: string | React.ReactNode,
  reaction?: { key: string, label: string },
}

const ClepherBadge = ({ label, reaction, onClose }: ClepherBadgeProps) => {
  return (
    <div className="badge-clepher">
      {
        reaction &&
        <span className={`like-${reaction.key} badge-reaction bg-contain w-[18px] h-[18px] inline mr-1`}></span>
      }
      {label}
      <span
        onClick={onClose}
        className="ml-1 cursor-pointer text-xs hover:text-error pt-0.5">
        ✕
      </span>
    </div>
  );
}

export default ClepherBadge;