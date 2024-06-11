import React, { useContext } from "react";
import AddKeywords from "components/common/add-keywords";
import ClepherSelect from "components/common/clepher-select";
import { MESSAGE_FLOWS, MESSAGE_TYPES, TEXT_CARDS } from "enums";
import SubHeader from "components/post-engagement/edit/sub-header";
import ClepherReactionBox from "components/common/clepher-reaction-box";
import { PostEngagementEditContext, PostEngagementEditDispatchContext } from "utils/contexts/PostEngagementEditContext";

const PostSettings = () => {
  const {
    textCard,
    messageType,
    messageFlow,
    excludeKeywords,
    triggerKeywords,
    positiveReactions,
    excludeKeywordVal,
    triggerKeywordVal,
  } = useContext(PostEngagementEditContext);

  const {
    setTextCard,
    setMessageType,
    setMessageFlow,
    setExcludeKeywords,
    setTriggerKeywords,
    setPositiveReactions,
    setExcludeKeywordVal,
    setTriggerKeywordVal,
  } = useContext(PostEngagementEditDispatchContext);

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
        value={messageType}
        options={MESSAGE_TYPES}
        onSelect={setMessageType}
        label="Select message type"
      />

      <ClepherSelect
        includeSelect
        label="Select Flow"
        value={messageFlow}
        options={MESSAGE_FLOWS}
        onSelect={setMessageFlow}
      />

      {
        messageType.value === "single-message" &&
        <ClepherSelect
          value={textCard}
          options={TEXT_CARDS}
          label="Select Message"
          onSelect={setTextCard}
        />
      }
    </>
  );
}

export default PostSettings;