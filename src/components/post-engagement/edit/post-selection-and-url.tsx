import { useState } from "react";
import PostUrl from "./post-url";
import SelectPost from "./select-post";

const PostSelectionAndUrl = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="basis-3/5">
      <div role="tablist" className="tabs h-12 bg-base-100 p-0 child-rounded-none rounded-b-none border-b border-b-base-300 tabs-boxed tabs-lg">
        <button role="tab" className={`tab ${tabIndex === 0 ? 'tab-active' : ''}`} onClick={() => setTabIndex(0)}>
          Select A Post
        </button>
        <button role="tab" className={`tab ${tabIndex === 1 ? 'tab-active' : ''}`} onClick={() => setTabIndex(1)}>
          Post ID / URL
        </button>
      </div>
      {tabIndex === 0 && <SelectPost />}
      {tabIndex === 1 && <PostUrl />}
    </div>
  );
}

export default PostSelectionAndUrl;