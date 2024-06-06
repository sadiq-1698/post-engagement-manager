import React, { useState } from "react";
import AddKeywords from "./add-keywords";
import ClepherSelect from "./clepher-select";

const MESSAGE_TYPES = [
  {
    value: 'flow',
    label: 'Flow',
  },
  {
    value: 'single-message',
    label: 'Single Message',
  }
];

const MESSAGE_FLOWS = [
  {
    value: 'welcome-message',
    label: 'Welcome Message',
  },
  {
    value: 'default-reply',
    label: 'Default Reply',
  }
];

const TEXT_CARDS = [
  {
    value: 'text-card-1',
    label: 'Text Card #1',
  },
  {
    value: 'text-card-2',
    label: 'Text Card #2',
  }
];

const PostSettings = () => {
  const [excludeKeywords, setExcludeKeywords] = useState<Array<string>>([]);
  const [triggerKeywords, setTriggerKeywords] = useState<Array<string>>([]);

  const [excludeKeywordVal, setExcludeKeywordVal] = useState("");
  const [triggerKeywordVal, setTriggerKeywordVal] = useState("");

  const [messageType, setMessageType] = useState(MESSAGE_TYPES[0]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [messageFlow, setMessageFlow] = useState(MESSAGE_FLOWS[0]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [textCard, setTextCard] = useState(TEXT_CARDS[0]);

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
        options={MESSAGE_TYPES}
        onSelect={setMessageType}
      />

      <ClepherSelect
        includeSelect
        label="Select Flow"
        options={MESSAGE_FLOWS}
        onSelect={setMessageFlow}
      />

      {
        messageType.value === "single-message" &&
        <ClepherSelect
          label="Select Message"
          options={TEXT_CARDS}
          onSelect={setTextCard}
        />
      }
    </>
  );
}

export default PostSettings;