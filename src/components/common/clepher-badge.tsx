export type ClepherBadgeProps = {
  onClose: () => void,
  label: string | React.ReactNode,
  reaction?: { key: string, label: string },
}

/**
 * This component renders a badge with an optional reaction icon and a close button.
 *
 * @param {object} props - The properties object.
 * @param {string | React.ReactNode} props.label - The label to be displayed inside the badge.
 * @param {object} [props.reaction] - An optional reaction object containing a key and a label.
 * @param {string} props.reaction.key - The key for the reaction, used for applying specific styles.
 * @param {string} props.reaction.label - The label for the reaction, used as accessible text.
 * @param {function} props.onClose - The function to be called when the close button is clicked.
 * 
 * @typedef {object} ClepherBadgeProps - The type for ClepherBadge component properties.
 */
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