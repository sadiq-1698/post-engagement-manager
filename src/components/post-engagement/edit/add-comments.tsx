import { STATIC_COMMENTS_HARD_LIMIT } from "../../../enums";

type AddCommentsProp = {
  comments: Array<string>,
  setComments: React.Dispatch<Array<string>>,
}

const AddComments = ({ comments, setComments }: AddCommentsProp) => {
  const handleDeleteComment = (idx: number) => {
    const res = comments.filter((el, index) => index !== idx);
    setComments([...res]);
  }

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const currComments = [...comments];
    currComments[idx] = e.target.value;
    setComments([...currComments]);
  }

  const handleAddComment = () => {
    if (comments.length >= STATIC_COMMENTS_HARD_LIMIT) return;
    setComments([...comments, ""]);
  }

  return (
    <div className="text-center">
      <br />

      {
        comments.map((el, idx) => {
          const isLastChild = idx === comments.length - 1;
          const marginClass = isLastChild ? '' : 'mb-1.5';

          return (
            <div className={`bg-base-200 p-1.5 ${marginClass} rounded-md border border-dotted border-base-300`}>
              <div className="flex flex-row items-center gap-1.5">
                <input
                  value={el}
                  type="text"
                  placeholder="Type your comment here"
                  onChange={(e) => handleValueChange(e, idx)}
                  className="input w-full focus:outline-offset-0"
                />
                <button
                  className="btn btn-sm btn-circle btn-ghost"
                  onClick={() => handleDeleteComment(idx)}
                >
                  ✕
                </button>
              </div>
            </div>
          );
        })
      }

      <br />

      {
        comments.length < 10 &&
        <button className="btn btn-primary" onClick={() => handleAddComment()}>
          Add Comment
        </button>
      }

    </div>
  );
}

export default AddComments;