import { SelectOptionType } from "types/global";
import React, { createContext, useState } from "react";
import { ASSISTANCE_TYPES, COMMENT_TYPES, INTEGRATION_TYPES, MESSAGE_FLOWS, MESSAGE_TYPES, TEXT_CARDS } from "enums/post-engagement";

type ContextType = {
  comments: Array<string>,
  textCard: {
    value: string;
    label: string;
  },
  messageType: {
    value: string;
    label: string;
  },
  messageFlow: {
    value: string;
    label: string;
  },
  commentType: {
    value: string;
    label: string;
  },
  assistanceType: {
    value: string;
    label: string;
  },
  excludeKeywords: Array<string>,
  triggerKeywords: Array<string>,
  integrationType: SelectOptionType,
  positiveReactions: Array<{ key: string, label: string }>,
  excludeKeywordVal: string,
  triggerKeywordVal: string,
}

type DispatchContextType = {
  setComments: React.Dispatch<Array<string>>,
  setTextCard: React.Dispatch<{
    value: string;
    label: string;
  }>,
  setMessageType: React.Dispatch<{
    value: string;
    label: string;
  }>,
  setMessageFlow: React.Dispatch<{
    value: string;
    label: string;
  }>,
  setCommentType: React.Dispatch<{
    value: string;
    label: string;
  }>,
  setAssistanceType: React.Dispatch<{
    value: string;
    label: string;
  }>,
  setExcludeKeywords: React.Dispatch<Array<string>>,
  setTriggerKeywords: React.Dispatch<Array<string>>,
  setIntegrationType: React.Dispatch<SelectOptionType>,
  setPositiveReactions: React.Dispatch<Array<{ key: string, label: string }>>,
  setExcludeKeywordVal: React.Dispatch<string>,
  setTriggerKeywordVal: React.Dispatch<string>,
};


const PostEngagementEditContext: React.Context<ContextType> = createContext(undefined as any);
const PostEngagementEditDispatchContext: React.Context<DispatchContextType> = createContext(undefined as any);

function PostEngagementEditProvider({ children }: { children: React.ReactNode }) {
  // Post settings states
  const [excludeKeywords, setExcludeKeywords] = useState<Array<string>>([]);
  const [triggerKeywords, setTriggerKeywords] = useState<Array<string>>([]);
  const [positiveReactions, setPositiveReactions] = useState<Array<{ key: string, label: string }>>([]);

  const [excludeKeywordVal, setExcludeKeywordVal] = useState("");
  const [triggerKeywordVal, setTriggerKeywordVal] = useState("");

  const [messageType, setMessageType] = useState(MESSAGE_TYPES[0]);
  const [messageFlow, setMessageFlow] = useState(MESSAGE_FLOWS[0]);
  const [textCard, setTextCard] = useState(TEXT_CARDS[0]);

  // Auto response states
  const [commentType, setCommentType] = useState<SelectOptionType>(COMMENT_TYPES[0]);

  const [integrationType, setIntegrationType] = useState<SelectOptionType>(INTEGRATION_TYPES[0]);
  const [assistanceType, setAssistanceType] = useState<SelectOptionType>(ASSISTANCE_TYPES[0]);

  const [comments, setComments] = useState<Array<string>>([
    "explicabo a laboriosam fugit",
    "ex provident earum excepturi",
    "corrupti tempora vero ipsa"
  ]);


  const contextValues = {
    comments,
    textCard,
    messageType,
    messageFlow,
    commentType,
    assistanceType,
    excludeKeywords,
    triggerKeywords,
    integrationType,
    positiveReactions,
    excludeKeywordVal,
    triggerKeywordVal,
  }

  const contextSetterValues = {
    setComments,
    setTextCard,
    setMessageType,
    setMessageFlow,
    setCommentType,
    setAssistanceType,
    setExcludeKeywords,
    setTriggerKeywords,
    setIntegrationType,
    setPositiveReactions,
    setExcludeKeywordVal,
    setTriggerKeywordVal,
  }

  return (
    <PostEngagementEditContext.Provider value={contextValues}>
      <PostEngagementEditDispatchContext.Provider value={contextSetterValues}>
        {children}
      </PostEngagementEditDispatchContext.Provider>
    </PostEngagementEditContext.Provider>
  );
}

export { PostEngagementEditProvider, PostEngagementEditContext, PostEngagementEditDispatchContext };