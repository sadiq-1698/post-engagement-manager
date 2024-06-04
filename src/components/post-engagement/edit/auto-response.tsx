import { useState } from "react";
import ClepherSelect from "./clepher-select";
import AddComments from "./add-comments";

const AutoResponse = () => {
  const [comments, setComments] = useState<Array<string>>([
    "explicabo a laboriosam fugit",
    "ex provident earum excepturi",
    "corrupti tempora vero ipsa"
  ]);

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="opacity-60">
          Enable To Automatically Like Comments
        </div>
        <div>
          <input type="checkbox" className="toggle toggle-primary" />
        </div>
      </div>

      <br />

      <h1 className="border-b border-b-base-300 mb-2.5 py-0.5 font-semibold">
        Reply In Comments
      </h1>

      <ClepherSelect
        label="Comment Type"
        options={["Static", "Open AI"]}
      />

      <AddComments comments={comments} setComments={setComments} />
    </>
  );
}

export default AutoResponse;