import ClepherBadge from "components/common/clepher-badge";
import getReactionSet from "utils/methods/get-reaction-set";

export type ClepherReactionBoxProps = {
  reactionType: string;
  reactions: Array<{ key: string, label: string }>;
  setReactions: React.Dispatch<Array<{ key: string, label: string }>>
}

const ClepherReactionBox = ({ reactionType, reactions, setReactions }: ClepherReactionBoxProps) => {
  const handleSelection = (reaction: { key: string, label: string }) => {
    if (reactions.map(el => el.key).includes(reaction.key)) return; // prevent adding duplicate reaction
    setReactions([...reactions, reaction]);
  }

  const handleCloseBadge = (idx: number, setReactions: React.Dispatch<Array<{ key: string, label: string }>>) => {
    const res = reactions.filter((el, index) => index !== idx);
    setReactions([...res]);
  }

  return (
    <>
      <div className="mb-2.5">
        {reactions.map((reaction, idx) => {
          return (
            <ClepherBadge
              reaction={reaction}
              label={reaction.label}
              key={reaction + "|" + idx}
              onClose={() => handleCloseBadge(idx, setReactions)}
            />
          );
        })}
      </div>


      <span id={`add_${reactionType}_reaction`} className="block">
        <ul className={`${reactionType} reactions-box`}>
          {
            getReactionSet(reactionType).map((reaction, idx) => {
              return (
                <li
                  key={reaction.key}
                  className={`reaction ${reaction.key}`}
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