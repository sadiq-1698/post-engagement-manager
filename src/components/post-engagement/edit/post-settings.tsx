import React, { useState } from "react";
import AddKeywords from "components/common/add-keywords";
import ClepherSelect from "components/common/clepher-select";
import { MESSAGE_FLOWS, MESSAGE_TYPES, TEXT_CARDS } from "enums";
import SubHeader from "components/post-engagement/edit/sub-header";
import ClepherReactionBox from "components/common/clepher-reaction-box";

const PostSettings = () => {
  const [excludeKeywords, setExcludeKeywords] = useState<Array<string>>([]);
  const [triggerKeywords, setTriggerKeywords] = useState<Array<string>>([]);
  const [positiveReactions, setPositiveReactions] = useState<Array<{ key: string, label: string }>>([]);

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

      <SubHeader>
        Require a Post Reaction
      </SubHeader>

      <br />

      <ClepherReactionBox
        reactionType="positive"
        reactions={positiveReactions}
        setReactions={setPositiveReactions}
      />

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

      <SubHeader>
        Private Reply After Post Engagement
      </SubHeader>


      <ClepherSelect
        label="Select message type"
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