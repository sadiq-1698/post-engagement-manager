import getReactionSet from "utils/methods/get-reaction-set";

export type ClepherReactions = {
  reactionType: string;
  reactions: Array<string>;
  setReactions: React.Dispatch<Array<string>>
}

export type ReactionBadgeProps = {
  label: string | React.ReactNode,
  reaction: string,
  onClose: () => void
}

const ReactionBadge = ({ label, reaction, onClose }: ReactionBadgeProps) => {
  return (
    <div className="badge-clepher">
      <span className={`${reaction} inline pr-5 mr-1`}></span>
      {label}
      <span
        onClick={onClose}
        className="ml-1 cursor-pointer text-xs hover:text-error">
        ✕
      </span>
    </div>
  );
}

const ClepherReactionBox = ({ reactionType, reactions, setReactions }: ClepherReactions) => {
  const handleSelection = (reaction: string) => {
    setReactions([...reactions, reaction]);
  }

  const handleCloseBadge = (idx: number, setReactions: React.Dispatch<Array<string>>) => {
    const res = reactions.filter((el, index) => index !== idx);
    setReactions([...res]);
  }

  return (
    <>
      <div className="mb-2.5">
        {reactions.map((reaction, idx) => {
          return (
            <ReactionBadge
              label={reaction}
              reaction={reaction}
              key={reaction + "|" + idx}
              onClose={() => handleCloseBadge(idx, setReactions)}
            />
          );
        })}
      </div>


      <span id={`add_${reactionType}_reaction`}>
        <ul className={`${reactionType} reactions-box`}>
          {
            getReactionSet(reactionType).map((reaction, idx) => {
              return (
                <li
                  key={reaction + '|-|-|' + idx}
                  className={`reaction ${reaction}`}
                  onClick={() => handleSelection(reaction)}
                />
              );
            })
          }
        </ul>

        <button className="btn btn-primary w-full">
          Require reaction
        </button>
      </span>
    </>
  );
}

export default ClepherReactionBox;