import { useState } from "react";
import AddComments from "./add-comments";
import ClepherSelect, { SelectOptionType } from "./clepher-select";

const COMMENT_TYPES = [
  {
    value: 'static',
    label: 'Static',
  },
  {
    value: 'openai',
    label: 'Open AI',
  }
];

const INTEGRATION_TYPES = [
  {
    value: 'integration-1',
    label: 'Integration 1',
  },
  {
    value: 'integration-2',
    label: 'Integration 2',
  }
];

const ASSISTANCE_TYPES = [
  {
    value: 'assistance-1',
    label: 'Assistance 1',
  },
  {
    value: 'assistance-2',
    label: 'Assistance 2',
  },
];

const AutoResponse = () => {
  const [commentType, setCommentType] = useState<SelectOptionType>(COMMENT_TYPES[0]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [integrationType, setIntegrationType] = useState<SelectOptionType>(INTEGRATION_TYPES[0]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [assistanceType, setAssistanceType] = useState<SelectOptionType>(ASSISTANCE_TYPES[0]);
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
        options={COMMENT_TYPES}
        onSelect={setCommentType}
      />

      {
        commentType.value === "openai" &&
        <>
          <ClepherSelect
            label="Select Integration"
            options={INTEGRATION_TYPES}
            onSelect={setIntegrationType}
          />
          <ClepherSelect
            label="Select Assistance"
            options={ASSISTANCE_TYPES}
            onSelect={setAssistanceType}
          />
        </>
      }

      {
        commentType.value === "static" &&
        <AddComments comments={comments} setComments={setComments} />
      }

    </>
  );
}

export default AutoResponse;