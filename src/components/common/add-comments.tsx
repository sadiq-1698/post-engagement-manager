import { STATIC_COMMENTS_HARD_LIMIT } from "enums";

type AddCommentsProp = {
  comments: Array<{ value: string }>,
  setComments: React.Dispatch<Array<{ value: string }>>,
}

/**
 * This component allows users to add, edit, and delete comments.
 * It ensures that the number of comments does not exceed the defined limit.
 * 
 * @param {object} props - The properties object.
 * @param {Array<string>} props.comments - The list of comments.
 * @param {React.Dispatch<Array<string>>} props.setComments - The function to update the list of comments.
 */
const AddComments = ({ comments, setComments }: AddCommentsProp) => {
  const handleDeleteComment = (idx: number) => {
    const res = comments.filter((el, index) => index !== idx);
    setComments([...res]);
  }

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const newComments = [...comments];
    newComments[idx].value = e.target.value;
    setComments([...newComments]);
  }

  const handleAddComment = () => {
    if (comments.length >= STATIC_COMMENTS_HARD_LIMIT) return;
    setComments([...comments, { value: '' }]);
  }

  return (
    <div className="text-center">
      <br />

      {
        comments.map((el, idx) => {
          const isLastChild = idx === comments.length - 1;
          const marginClass = isLastChild ? '' : 'mb-1.5';

          return (
            <div
              key={el + "-|-" + idx}
              className={`bg-base-200 p-1.5 ${marginClass} rounded-md border border-dotted border-base-300`}
            >
              <div className="flex flex-row items-center gap-1.5">
                <input
                  type="text"
                  value={el.value}
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
        comments.length < STATIC_COMMENTS_HARD_LIMIT &&
        <button className="btn btn-primary" onClick={() => handleAddComment()}>
          Add Comment
        </button>
      }

    </div>
  );
}

export default AddComments;