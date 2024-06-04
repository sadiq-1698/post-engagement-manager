import React, { useState } from "react";
import AddKeywords from "./add-keywords";
import ClepherSelect from "./clepher-select";

const PostSettings = () => {
  const [excludeKeywords, setExcludeKeywords] = useState<Array<string>>([]);
  const [triggerKeywords, setTriggerKeywords] = useState<Array<string>>([]);

  const [excludeKeywordVal, setExcludeKeywordVal] = useState("");
  const [triggerKeywordVal, setTriggerKeywordVal] = useState("");

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="opacity-60">
          Enable To Privately Reply To First-Level Comments Only
        </div>
        <div>
          <input type="checkbox" className="toggle toggle-primary" />
        </div>
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="opacity-60">
          Send Message To The Same User Only Once Per Post
        </div>
        <div>
          <input type="checkbox" className="toggle toggle-primary" />
        </div>
      </div>

      <br />

      <h1 className="border-b border-b-base-300">
        Require a Post Reaction
      </h1>

      <br />

      <div className="mt-2.5">
        <span id="add_positive_reaction">
          <ul className="positive reactions-box">
            <li className="reaction reaction-like" data-reaction="Like">
            </li>
            <li className="reaction reaction-love" data-reaction="Love">
            </li>
            <li className="reaction reaction-haha" data-reaction="HaHa">
            </li>
            <li className="reaction reaction-wow" data-reaction="Wow">
            </li>
            <li className="reaction reaction-sad" data-reaction="Sad">
            </li>
            <li className="reaction reaction-angry" data-reaction="Angry">
            </li>
          </ul>

          <button className="btn btn-primary w-full">
            Require reaction
          </button>
        </span>
      </div>

      <br />

      <AddKeywords
        value={excludeKeywordVal}
        keywords={excludeKeywords}
        setValue={setExcludeKeywordVal}
        setKeywords={setExcludeKeywords}
        header="Exclude Comments With These Keywords"
      />

      <br />

      <AddKeywords
        value={triggerKeywordVal}
        keywords={triggerKeywords}
        setValue={setTriggerKeywordVal}
        setKeywords={setTriggerKeywords}
        header="Only Trigger For Comments With These Keywords"
      />

      <br />

      <h1 className="border-b border-b-base-300 mb-2.5 py-0.5 font-semibold">
        Private Reply After Post Engagement
      </h1>
      <ClepherSelect
        label="Select Message Type"
        options={["Flow", "Single Message"]}
      />
      <ClepherSelect
        includeSelect
        label="Select Flow"
        options={["Welcome Message", "Default Reply"]}
      />
    </>
  );
}

export default PostSettings;